module.exports = filterFiles;

function filterFiles(path, fileExtension, callback) {
  const fs = require("fs");
  fs.readdir(path, callback);
}
