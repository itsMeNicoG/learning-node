//count number of line breaks in text file

const fs = require("fs");
const filePath = process.argv[2];

const fileContent = fs.readFile(filePath).toString();
console.log(fileContent.split("\n").length - 1);
