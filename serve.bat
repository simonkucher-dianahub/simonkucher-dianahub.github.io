@echo off
echo Serving DianaHub at http://%COMPUTERNAME%:80  (Ctrl+C to stop)
python -m http.server 8080 --directory "%~dp0public"
pause
