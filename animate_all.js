const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('page.tsx')) return;
  if (filePath.includes('admin') || filePath.includes('landing')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add fade-up to all sections without data-aos
  content = content.replace(/<section([^>]*)>/g, (match, p1) => {
    if (p1.includes('data-aos=')) return match;
    return `<section${p1} data-aos="fade-up" data-aos-duration="800">`;
  });

  // Add fade-up to all elements with class="card "
  content = content.replace(/<div([^>]*className="[^"]*card[^"]*"[^>]*)>/g, (match, p1) => {
    if (p1.includes('data-aos=')) return match;
    return `<div${p1} data-aos="fade-up" data-aos-delay="100">`;
  });

  // Add fade-down to hero text containers (common class combo across site)
  content = content.replace(/<div([^>]*className="container position-relative z-2 text-center text-white"[^>]*)>/g, (match, p1) => {
      if (p1.includes('data-aos=')) return match;
      return `<div${p1} data-aos="fade-down" data-aos-duration="1000">`;
  });

  // Specific fixes for headers in body sections
  content = content.replace(/<h2([^>]*className="display-[^"]*"[^>]*)>/g, (match, p1) => {
      if (p1.includes('data-aos=')) return match;
      return `<h2${p1} data-aos="fade-up">`;
  });
  
  content = content.replace(/<h3([^>]*className="display-[^"]*"[^>]*)>/g, (match, p1) => {
      if (p1.includes('data-aos=')) return match;
      return `<h3${p1} data-aos="fade-up" data-aos-delay="50">`;
  });

  // Overwrite if changed
  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Animated: ${filePath}`);
  }
}

walkDir('./src/app', processFile);
console.log('All non-admin page.tsx files animated.');
