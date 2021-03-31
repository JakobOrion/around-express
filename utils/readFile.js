const fs = require('fs').promises;

function readFile(path) {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse);
}

module.exports = readFile;
