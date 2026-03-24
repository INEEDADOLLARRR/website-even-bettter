@echo off
echo Starting Verrazano Roofing (Production Build)...
echo --------------------------------------------
REM Ensure build exists
if not exist "dist" (
    echo Building...
    npm run build
)
echo Starting Express server...
node server.js
pause
