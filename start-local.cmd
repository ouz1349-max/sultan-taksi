@echo off
cd /d "%~dp0"
echo Starting Sultan Taksi local dev server on http://127.0.0.1:3000
call npm run dev -- --hostname 127.0.0.1 --port 3000
