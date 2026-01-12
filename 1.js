
const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter number: ", n => {
  console.log(n % 2 == 0 ? "Even Number" : "Odd Number");
  r.close();
});


