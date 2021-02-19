//take two numbers throw command line and add them

console.log(process.argv.slice(2).reduce((a, b) => parseInt(a) + parseInt(b)));
