const clasifyFiles = require("./mymodule");

clasifyFiles(process.argv[2], process.argv[3], (err, files) => {
  if (err) return console.error(`Error while reading directory ${err.message}`);
  files.forEach((file) => {
    if (file.endsWith(`.${fileExtension}`)) return console.log(`${file}`);
  });
});
