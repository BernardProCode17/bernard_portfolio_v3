const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const config = {
  inputDir: './src/assets',
  outputDir: './public/optimized',
  quality: 80,
  maxWidth: 1920,
  formats: ['webp', 'avif'],
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Find all images
const imageFiles = glob.sync(path.join(config.inputDir, '**/*.{jpg,jpeg,png,webp}'));

// Process each image
async function processImages() {
  console.log(`Found ${imageFiles.length} images to optimize...`);
  
  for (const imagePath of imageFiles) {
    const filename = path.basename(imagePath, path.extname(imagePath));
    const relativePath = path.relative(config.inputDir, path.dirname(imagePath));
    const outputPath = path.join(config.outputDir, relativePath);
    
    // Create output subdirectories if needed
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    try {
      // Load image
      const image = sharp(imagePath);
      const metadata = await image.metadata();
      
      // Resize if needed
      const resizeWidth = Math.min(metadata.width, config.maxWidth);
      const resizedImage = image.resize(resizeWidth);
      
      // Generate optimized versions
      for (const format of config.formats) {
        const outputFilename = path.join(outputPath, `${filename}.${format}`);
        
        await resizedImage
          .toFormat(format, { quality: config.quality })
          .toFile(outputFilename);
          
        console.log(`✅ Generated: ${outputFilename}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${imagePath}:`, error);
    }
  }
}

// Run the optimization
processImages().then(() => {
  console.log('Image optimization complete!');
});