const readLine = require("readline");
const rl = readLine.createInterface(process.stdin, process.stdout);

main();
async function main() {
  rl.question("What's your name: ", (name) => {
    if (name.toLowerCase() === "kathe")
      console.log(
        `Hello ${name}, according to my records, you are La Siempre Sucia Mohete!`
      );
    else
      console.log(
        `Hello ${name}, you do not seem to be La Siempre Sucia Mohete!`
      );
    rl.close();
  });
}
