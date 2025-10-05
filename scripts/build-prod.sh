# Optimized production build script for Next.js portfolio
# This script will:
# 1. Clean up any previous builds
# 2. Run image optimization
# 3. Generate a production build with tree-shaking and minification
# 4. Copy only required files to the .next directory
# 5. Analyze the final bundle

# Stop on any error
set -e

echo "🧹 Cleaning previous builds..."
rm -rf .next || true
rm -rf .analyze || true

echo "🖼️ Optimizing images..."
npm run optimize-images

echo "📦 Installing dependencies..."
npm ci

echo "🧪 Running linting and type checking..."
npm run lint

echo "🔨 Building optimized production bundle..."
NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 npm run build

echo "🔍 Analyzing bundle size..."
npm run analyze:report

echo "✅ Build completed successfully!"
echo "Run 'npm start' to start the production server."