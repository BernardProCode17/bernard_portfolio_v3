# Safe Optimizations Script
# This script makes only stable optimizations that won't break your site

# Clean any previous build
rm -rf .next || true
echo "✅ Previous build cleaned"

# Basic Image Optimization Script
echo "📊 Creating image optimization script..."

cat > optimize-images.js << 'EOL'
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Check if sharp is installed
const hasSharp = fs.existsSync(path.join(__dirname, 'node_modules', 'sharp'));

if (!hasSharp) {
  console.log('📥 Installing Sharp for image optimization...');
  exec('npm install --save-dev sharp', (err) => {
    if (err) {
      console.error('❌ Error installing Sharp:', err);
      return;
    }
    console.log('✅ Sharp installed successfully!');
    optimizeImages();
  });
} else {
  optimizeImages();
}

function optimizeImages() {
  console.log('🖼️ Beginning image optimization...');
  
  // This is a placeholder - in a production environment,
  // you would add code here to optimize images using Sharp
  console.log('✅ Image optimization completed (placeholder)');
  
  // Next steps guidance
  console.log('\n🔍 Next steps for performance improvement:');
  console.log('1. Ensure all images use the Next.js Image component with proper size attributes');
  console.log('2. Use responsive sizes attribute: sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"');
  console.log('3. Add "loading=lazy" for below-the-fold images');
  console.log('4. Add "priority" attribute for critical above-the-fold images');
}
EOL

# Create a performance config
echo "📝 Creating performance config..."

cat > performance-guide.md << 'EOL'
# Performance Optimization Guide

## Quick Wins

1. **Image Optimization**:
   - Always use `next/image` for all images
   - Set appropriate sizes
   - Use priority for above-the-fold images

2. **Font Optimization**:
   - Use `next/font` with proper subsets

3. **Component Splitting**:
   - Split large components into smaller ones
   - Use dynamic imports for non-critical components

## Bundle Size Optimization

1. **Import Optimization**:
   - Use named imports instead of importing entire libraries
   - Example: `import { useState } from 'react'` instead of `import React from 'react'`

2. **Dependencies Audit**:
   - Regularly run `npm audit` to find and fix vulnerabilities
   - Consider alternatives for heavy dependencies

## Monitoring

1. **Vercel Analytics**:
   - Regularly check Speed Insights
   - Pay attention to Core Web Vitals

2. **Lighthouse**:
   - Run Lighthouse in Chrome DevTools
   - Focus on Performance and Accessibility scores
EOL

echo "✅ Performance guide created: performance-guide.md"
echo "✅ Image optimization script created: optimize-images.js"

# Create a simple build script
echo "📦 Creating optimized build script..."

cat > build-optimized.js << 'EOL'
const { exec } = require('child_process');

console.log('🧹 Cleaning previous build...');
exec('rm -rf .next', (err) => {
  if (err) {
    console.error('Error cleaning previous build:', err);
    return;
  }
  
  console.log('🏗️ Building optimized production bundle...');
  exec('NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 next build', (err, stdout, stderr) => {
    if (err) {
      console.error('Error building:', stderr);
      return;
    }
    
    console.log(stdout);
    console.log('✅ Build completed successfully!');
  });
});
EOL

echo "✅ Optimized build script created: build-optimized.js"
echo "👉 Run 'node build-optimized.js' to create an optimized production build"