"""Make a consistent SQLite backup without copying a live WAL file."""
import sqlite3
import sys
from pathlib import Path

source = Path(sys.argv[1] if len(sys.argv) > 1 else "backend/data/solve.sqlite3")
destination = Path(sys.argv[2] if len(sys.argv) > 2 else "tmp/solve-backup.sqlite3")
if not source.is_file() or destination.exists():
    raise SystemExit("Source must exist and backup destination must not already exist.")
destination.parent.mkdir(parents=True, exist_ok=True)
with sqlite3.connect(f"file:{source.resolve().as_posix()}?mode=ro", uri=True) as src:
    with sqlite3.connect(destination) as dst:
        src.backup(dst)
print(f"Backup saved to {destination}. Treat it as private learning data.")
