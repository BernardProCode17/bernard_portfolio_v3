@echo off
REM Optimized production build script for Next.js portfolio

echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist .analyze rmdir /s /q .analyze

echo 🖼️ Optimizing images...
call npm run optimize-images

echo 📦 Installing dependencies...
call npm ci

echo 🧪 Running linting and type checking...
call npm run lint

echo 🔨 Building optimized production bundle...
set NODE_ENV=production
set NEXT_TELEMETRY_DISABLED=1
call npm run build

echo 🔍 Analyzing bundle size...
call npm run analyze:report

echo ✅ Build completed successfully!
echo Run 'npm start' to start the production server.