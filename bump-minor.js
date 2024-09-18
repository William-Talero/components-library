 
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

// Leer el archivo package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Obtener la versión actual
const currentVersion = packageJson.version;

// Separar la versión en major, minor, y patch
const [major, minor, patch] = currentVersion.split('.').map(Number);

// Incrementar el número patch
const newPatch = patch + 1;
const newVersion = `${major}.${minor}.${newPatch}`;

// Actualizar la versión en package.json
packageJson.version = newVersion;

// Guardar el archivo actualizado
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log(`La versión se ha actualizado a: ${newVersion}`);