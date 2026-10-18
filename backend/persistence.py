"""Backward-compatible SQLite migrations and durable grading operations."""
import json
import time


def migrate(db):
    db.execute("CREATE TABLE IF NOT EXISTS schema_migrations(version INTEGER PRIMARY KEY)")
    if not db.execute("SELECT 1 FROM schema_migrations WHERE version=1").fetchone():
        columns = {row[1] for row in db.execute("PRAGMA table_info(sessions)")}
        if "revision" not in columns:
            db.execute("ALTER TABLE sessions ADD COLUMN revision INTEGER NOT NULL DEFAULT 0")
        db.execute("""CREATE TABLE IF NOT EXISTS operations (
            session_id TEXT NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
            owner TEXT NOT NULL, id TEXT NOT NULL, fingerprint TEXT NOT NULL,
            status TEXT NOT NULL, result TEXT, updated REAL NOT NULL,
            PRIMARY KEY(session_id,owner,id))""")
        db.execute("""CREATE TABLE IF NOT EXISTS principals (
            owner TEXT PRIMARY KEY, id TEXT NOT NULL UNIQUE, account_id TEXT)""")
        db.execute("INSERT OR IGNORE INTO principals(owner,id) SELECT DISTINCT owner,lower(hex(randomblob(16))) FROM sessions")
        db.execute("INSERT INTO schema_migrations VALUES(1)")
    db.execute("UPDATE operations SET status='interrupted' WHERE status='pending'")
    from backend import accounts, product, media, notifications
    accounts.initialize(db)
    product.initialize(db)
    media.initialize(db)
    notifications.initialize(db)
    db.execute('INSERT OR IGNORE INTO schema_migrations VALUES(2)')


def operation(db, sid, owner, operation_id):
    row = db.execute("SELECT fingerprint,status,result FROM operations WHERE session_id=? AND owner=? AND id=?",
                     (sid, owner, operation_id)).fetchone()
    return {"fingerprint": row[0], "status": row[1], "result": json.loads(row[2]) if row[2] else None} if row else None


def record_operation(db, sid, owner, operation_id, fingerprint, status, result=None):
    db.execute("""INSERT INTO operations VALUES(?,?,?,?,?,?,?)
        ON CONFLICT(session_id,owner,id) DO UPDATE SET status=excluded.status,result=excluded.result,updated=excluded.updated""",
               (sid, owner, operation_id, fingerprint, status, json.dumps(result) if result else None, time.time()))
