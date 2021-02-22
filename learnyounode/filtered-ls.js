const fs = require("fs");
const path = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(path, (err, files) => {
  if (err) return console.error(`Error while reading directory ${err.message}`);
  files.forEach((file) => {
    if (file.endsWith(`.${fileExtension}`)) return console.log(`${file}`);
  });
});
