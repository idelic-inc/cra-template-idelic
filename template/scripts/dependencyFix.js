const fs = require('fs');
const fileName = 'package.json';
const file = require('../package.json');
const dependencies = require('./dependencies.json');

if (file.devDependencies) {
  file.devDependencies = {...file.devDependencies, ...dependencies.devDependencies}
} else {
  file.devDependencies = dependencies.devDependencies;
}

file.dependencies = {...file.dependencies, ...dependencies.dependencies};

for (const dep in file.devDependencies) {
  delete file.dependencies[dep];
}

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);

  console.log('Moved packages to devDependencies');
});
