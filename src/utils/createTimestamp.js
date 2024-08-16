const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, 'timestamp'), new Date().toString());
