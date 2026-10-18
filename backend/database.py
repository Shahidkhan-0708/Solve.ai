"""Unified Database Adapter for SQLite and Supabase PostgreSQL.

When DATABASE_URL or SUPABASE_DB_URL is set in environment (pointing to Supabase PostgreSQL),
this module establishes connections using psycopg v3 with connection pooling.
Otherwise, it falls back seamlessly to SQLite solve.sqlite3 for zero-configuration local runs.
"""
import os
import re
import sqlite3
import time
from contextlib import closing
from pathlib import Path
from typing import Any, List, Optional, Tuple

DATABASE_URL = os.getenv("DATABASE_URL") or os.getenv("SUPABASE_DB_URL") or os.getenv("POSTGRES_URL")
IS_POSTGRES = bool(DATABASE_URL and ("postgres://" in DATABASE_URL or "postgresql://" in DATABASE_URL))


def translate_query(sql: str) -> str:
    """Translate SQLite dialect to PostgreSQL dialect."""
    parts = []
    in_quote = False
    quote_char = None
    i = 0
    while i < len(sql):
        ch = sql[i]
        if ch in ("'", '"') and (i == 0 or sql[i - 1] != '\\'):
            if not in_quote:
                in_quote = True
                quote_char = ch
            elif quote_char == ch:
                in_quote = False
                quote_char = None
            parts.append(ch)
        elif ch == '?' and not in_quote:
            parts.append('%s')
        else:
            parts.append(ch)
        i += 1
    result = "".join(parts)

    # BEGIN IMMEDIATE -> BEGIN
    result = re.sub(r'\bBEGIN\s+IMMEDIATE\b', 'BEGIN', result, flags=re.IGNORECASE)

    # INSERT OR IGNORE INTO -> INSERT INTO ... ON CONFLICT DO NOTHING
    if re.search(r'\bINSERT\s+OR\s+IGNORE\s+INTO\b', result, flags=re.IGNORECASE):
        result = re.sub(r'\bINSERT\s+OR\s+IGNORE\s+INTO\b', 'INSERT INTO', result, flags=re.IGNORECASE)
        if 'ON CONFLICT' not in result.upper():
            result = result.rstrip().rstrip(';') + ' ON CONFLICT DO NOTHING'

    # lower(hex(randomblob(16))) -> md5(random()::text || clock_timestamp()::text)
    result = re.sub(r'lower\s*\(\s*hex\s*\(\s*randomblob\s*\(\s*\d+\s*\)\s*\)\s*\)',
                    "md5(random()::text || clock_timestamp()::text)", result, flags=re.IGNORECASE)

    return result


class PGCursorWrapper:
    def __init__(self, cursor):
        self._cursor = cursor

    @property
    def rowcount(self) -> int:
        return self._cursor.rowcount if self._cursor.rowcount is not None else -1

    def fetchone(self) -> Optional[Tuple]:
        row = self._cursor.fetchone()
        return tuple(row) if row is not None else None

    def fetchall(self) -> List[Tuple]:
        rows = self._cursor.fetchall()
        return [tuple(r) for r in rows]

    def __iter__(self):
        for row in self._cursor:
            yield tuple(row)


class PGConnectionWrapper:
    def __init__(self, conn):
        self._conn = conn
        self._closed = False

    def execute(self, sql: str, params: Any = None):
        sql_clean = sql.strip()
        # Handle PRAGMA table_info(name)
        pragma_match = re.match(r'PRAGMA\s+table_info\s*\(\s*([a-zA-Z0-9_]+)\s*\)', sql_clean, re.IGNORECASE)
        if pragma_match:
            table_name = pragma_match.group(1).lower()
            cur = self._conn.cursor()
            cur.execute(
                "SELECT ordinal_position, column_name, data_type, is_nullable, column_default, 0 "
                "FROM information_schema.columns WHERE table_name = %s ORDER BY ordinal_position",
                (table_name,)
            )
            return PGCursorWrapper(cur)

        # Ignore other SQLite PRAGMAs
        if sql_clean.upper().startswith("PRAGMA "):
            cur = self._conn.cursor()
            return PGCursorWrapper(cur)

        translated = translate_query(sql_clean)
        cur = self._conn.cursor()
        if params is not None:
            if isinstance(params, (list, tuple)):
                cur.execute(translated, params)
            else:
                cur.execute(translated, (params,))
        else:
            cur.execute(translated)
        return PGCursorWrapper(cur)

    def executescript(self, script: str):
        cur = self._conn.cursor()
        for statement in script.split(";"):
            clean = statement.strip()
            if clean:
                if clean.upper().startswith("PRAGMA "):
                    continue
                cur.execute(translate_query(clean))
        self._conn.commit()

    def commit(self):
        self._conn.commit()

    def rollback(self):
        self._conn.rollback()

    def close(self):
        if not self._closed:
            self._conn.close()
            self._closed = True

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            self.rollback()
        self.close()


def init_postgres(conn_wrapper: PGConnectionWrapper):
    """Create schema, custom functions, and indexes in PostgreSQL."""
    cur = conn_wrapper._conn.cursor()

    # json_extract helper for PostgreSQL
    cur.execute("""
    CREATE OR REPLACE FUNCTION json_extract(val TEXT, path TEXT) RETURNS TEXT AS $$
    DECLARE
        elem jsonb;
    BEGIN
        IF val IS NULL OR path IS NULL THEN RETURN NULL; END IF;
        elem := (val::jsonb #> string_to_array(ltrim(path, '$.'), '.'));
        IF elem IS NULL THEN RETURN NULL; END IF;
        IF jsonb_typeof(elem) = 'boolean' THEN
            IF elem::text = 'true' THEN RETURN '1'; ELSE RETURN '0'; END IF;
        END IF;
        RETURN elem #>> '{}';
    EXCEPTION WHEN OTHERS THEN
        RETURN NULL;
    END;
    $$ LANGUAGE plpgsql IMMUTABLE;
    """)

    # Core tables
    cur.execute("""
    CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        owner TEXT NOT NULL,
        state TEXT NOT NULL,
        updated DOUBLE PRECISION NOT NULL,
        revision INTEGER NOT NULL DEFAULT 0
    );
    CREATE INDEX IF NOT EXISTS idx_sessions_owner ON sessions(owner);

    CREATE TABLE IF NOT EXISTS quota (
        bucket TEXT NOT NULL,
        period TEXT NOT NULL,
        count INTEGER NOT NULL,
        PRIMARY KEY(bucket, period)
    );

    CREATE TABLE IF NOT EXISTS operations (
        session_id TEXT NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
        owner TEXT NOT NULL,
        id TEXT NOT NULL,
        fingerprint TEXT NOT NULL,
        status TEXT NOT NULL,
        result TEXT,
        updated DOUBLE PRECISION NOT NULL,
        PRIMARY KEY(session_id, owner, id)
    );

    CREATE TABLE IF NOT EXISTS principals (
        owner TEXT PRIMARY KEY,
        id TEXT NOT NULL UNIQUE,
        account_id TEXT
    );

    CREATE TABLE IF NOT EXISTS schema_migrations (
        version INTEGER PRIMARY KEY
    );

    CREATE TABLE IF NOT EXISTS accounts (
        id TEXT PRIMARY KEY,
        google_sub TEXT NOT NULL UNIQUE,
        owner TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS auth_sessions (
        token TEXT PRIMARY KEY,
        account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        expires DOUBLE PRECISION NOT NULL
    );

    CREATE TABLE IF NOT EXISTS auth_challenges (
        token TEXT PRIMARY KEY,
        owner TEXT NOT NULL,
        expires DOUBLE PRECISION NOT NULL
    );

    CREATE TABLE IF NOT EXISTS profiles (
        owner TEXT PRIMARY KEY,
        state TEXT NOT NULL,
        revision INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS conversations (
        id TEXT PRIMARY KEY,
        owner TEXT NOT NULL,
        state TEXT NOT NULL,
        revision INTEGER NOT NULL,
        updated DOUBLE PRECISION NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_conversations_owner ON conversations(owner);

    CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
        seq INTEGER NOT NULL,
        role TEXT NOT NULL,
        text TEXT NOT NULL,
        status TEXT NOT NULL,
        operation_id TEXT NOT NULL,
        fingerprint TEXT NOT NULL,
        created DOUBLE PRECISION NOT NULL,
        error TEXT,
        parent_id TEXT,
        UNIQUE(conversation_id, operation_id, role)
    );
    CREATE INDEX IF NOT EXISTS idx_messages_thread ON messages(conversation_id, seq);

    CREATE TABLE IF NOT EXISTS records (
        kind TEXT NOT NULL,
        id TEXT PRIMARY KEY,
        owner TEXT NOT NULL,
        state TEXT NOT NULL,
        revision INTEGER NOT NULL,
        updated DOUBLE PRECISION NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_records_owner ON records(owner, kind, updated);

    CREATE TABLE IF NOT EXISTS media (
        id TEXT PRIMARY KEY,
        owner TEXT NOT NULL,
        filename TEXT NOT NULL,
        mime TEXT NOT NULL,
        state TEXT NOT NULL,
        conversation_id TEXT REFERENCES conversations(id) ON DELETE CASCADE,
        session_id TEXT REFERENCES sessions(id) ON DELETE CASCADE,
        created DOUBLE PRECISION NOT NULL,
        expires DOUBLE PRECISION,
        signature TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_media_owner ON media(owner, signature);

    CREATE TABLE IF NOT EXISTS push_subscriptions (
        id TEXT PRIMARY KEY,
        owner TEXT NOT NULL,
        state TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS animations (
        session_id TEXT NOT NULL,
        concept INTEGER NOT NULL,
        signature TEXT NOT NULL,
        status TEXT NOT NULL,
        plan TEXT,
        manifest TEXT,
        error TEXT,
        PRIMARY KEY(session_id, concept)
    );
    """)
    conn_wrapper._conn.commit()


import urllib.parse
import logging

logger = logging.getLogger("solve")


def sanitize_db_url(url: str) -> str:
    """Safely URL-encode special characters like @ in the password portion of a database URI without double-encoding."""
    m = re.match(r'^(postgres(?:ql)?://)([^:]+):(.*)@([^@/]+(?::\d+)?(?:/.*)?)$', url)
    if m:
        scheme, user, password, rest = m.groups()
        clean_pass = urllib.parse.unquote(password)
        encoded_password = urllib.parse.quote(clean_pass, safe='')
        return f'{scheme}{user}:{encoded_password}@{rest}'
    return url


_pg_initialized = False


def get_connection(sqlite_db_path: Path):
    """Return a database connection (Supabase PostgreSQL if configured, else SQLite)."""
    global _pg_initialized, DATABASE_URL, IS_POSTGRES

    # Re-read env in case it was updated dynamically
    url = os.getenv("DATABASE_URL") or os.getenv("SUPABASE_DB_URL") or os.getenv("POSTGRES_URL")
    if url and ("postgres://" in url or "postgresql://" in url):
        try:
            import psycopg
            cleaned_url = sanitize_db_url(url.strip())
            conn = psycopg.connect(cleaned_url, autocommit=False)
            wrapper = PGConnectionWrapper(conn)
            if not _pg_initialized:
                init_postgres(wrapper)
                _pg_initialized = True
            return wrapper
        except Exception as e:
            logger.warning("Could not connect to PostgreSQL: %s. Using local database.", e)

    # Fallback to local SQLite
    db = sqlite3.connect(sqlite_db_path, timeout=10)
    db.execute("PRAGMA foreign_keys=ON")
    return db

