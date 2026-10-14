FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt && useradd --create-home solve
COPY --chown=solve:solve backend ./backend
RUN mkdir -p /data && chown solve:solve /data
ENV DATA_DIR=/data
USER solve
EXPOSE 8000
CMD ["python","-m","uvicorn","backend.main:app","--host","0.0.0.0","--port","8000","--workers","1"]
