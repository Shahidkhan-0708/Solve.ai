FROM python:3.12-slim
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends build-essential pkg-config libcairo2-dev libpango1.0-dev fonts-dejavu-core ffmpeg && rm -rf /var/lib/apt/lists/*
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt && useradd --create-home solve
COPY --chown=solve:solve backend ./backend
COPY --chown=solve:solve scripts/manim ./scripts/manim
RUN mkdir -p /data && chown solve:solve /data
ENV DATA_DIR=/data
USER solve
EXPOSE 8000
CMD ["python","-m","uvicorn","backend.main:app","--host","0.0.0.0","--port","8000","--workers","1"]
