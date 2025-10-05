const fs = require('fs');
const path = require('path');

// Get the bundle stats file from the analyze command
const clientStatsFilePath = path.join(__dirname, '../.next/analyze/client.json');
const serverStatsFilePath = path.join(__dirname, '../.next/analyze/server.json');

// Print optimization recommendations
function analyzeModules() {
  console.log('📦 Module Optimization Recommendations 📦');
  console.log('========================================\n');

  // Check if stats files exist
  if (!fs.existsSync(clientStatsFilePath)) {
    console.error('❌ Client stats file not found. Run "npm run analyze" first.');
    return;
  }

  try {
    // Read client stats
    const clientStats = JSON.parse(fs.readFileSync(clientStatsFilePath, 'utf8'));
    
    // Get all modules
    const modules = getAllModules(clientStats);
    
    // Sort modules by size
    const sortedModules = modules.sort((a, b) => b.size - a.size);
    
    // Display top heavy modules
    console.log('🔍 Top 20 Largest Modules:');
    console.log('---------------------------');
    
    sortedModules.slice(0, 20).forEach((module, index) => {
      const sizeInKb = (module.size / 1024).toFixed(2);
      console.log(`${index + 1}. ${module.name} (${sizeInKb} KB)`);
    });
    
    console.log('\n📊 Bundle Size Distribution by Category:');
    console.log('----------------------------------------');
    
    // Group modules by category
    const categories = {
      'react': sortedModules.filter(m => /react|react-dom/.test(m.name)),
      'framework': sortedModules.filter(m => /next|webpack/.test(m.name)),
      'ui': sortedModules.filter(m => /styled-components|mui|tailwind|emotion/.test(m.name)),
      'icons': sortedModules.filter(m => /icon|react-icons/.test(m.name)),
      'animations': sortedModules.filter(m => /lottie|animation|animate/.test(m.name)),
      'sanity': sortedModules.filter(m => /sanity/.test(m.name)),
      'utils': sortedModules.filter(m => /lodash|moment|date-fns|axios/.test(m.name)),
      'other': sortedModules.filter(m => 
        !(/react|react-dom|next|webpack|styled-components|mui|tailwind|emotion|icon|react-icons|lottie|animation|animate|sanity|lodash|moment|date-fns|axios/.test(m.name))
      )
    };
    
    // Calculate category sizes
    Object.entries(categories).forEach(([category, modules]) => {
      const totalSize = modules.reduce((sum, m) => sum + m.size, 0);
      const sizeInKb = (totalSize / 1024).toFixed(2);
      console.log(`${category}: ${sizeInKb} KB (${modules.length} modules)`);
    });
    
    console.log('\n💡 Optimization Recommendations:');
    console.log('--------------------------------');
    
    // Check for specific large libraries
    checkForHeavyLibrary(sortedModules, 'moment', 'date-fns');
    checkForHeavyLibrary(sortedModules, 'lodash', '@lodash/');
    checkForHeavyLibrary(sortedModules, 'react-icons', 'dynamic imports');
    checkForHeavyLibrary(sortedModules, 'styled-components', 'CSS Modules or inline styles');
    
    console.log('\n✅ Optimization Process Complete!');
    
  } catch (error) {
    console.error('❌ Error analyzing bundle stats:', error);
  }
}

// Extract all modules from stats
function getAllModules(stats) {
  const modules = [];
  
  function processModule(mod, path = '') {
    if (mod.modules) {
      mod.modules.forEach(subMod => {
        processModule(subMod, path + '/' + (mod.name || ''));
      });
    }
    
    if (mod.name && mod.size) {
      modules.push({
        name: (path + '/' + mod.name).replace(/^\/+/, ''),
        size: mod.size
      });
    }
  }
  
  processModule(stats);
  return modules;
}

// Check for specific large libraries
function checkForHeavyLibrary(modules, libraryName, alternative) {
  const libModules = modules.filter(m => m.name.includes(libraryName));
  
  if (libModules.length > 0) {
    const totalSize = libModules.reduce((sum, m) => sum + m.size, 0);
    const sizeInKb = (totalSize / 1024).toFixed(2);
    
    console.log(`⚠️  ${libraryName} is adding ${sizeInKb} KB to your bundle. Consider using ${alternative} instead.`);
  }
}

// Run the analysis
analyzeModules();