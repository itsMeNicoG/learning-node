//count number of line breaks in text file using async readFile

const fs = require("fs");
const filePath = process.argv[2];

fs.readFile(filePath, "utf8", (err, data) => {
  console.log(data.split("\n").length - 1);
});
