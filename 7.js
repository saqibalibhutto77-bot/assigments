
const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter first number: ", a => {
  r.question("Enter second number: ", b => {
    a = Number(a); b = Number(b);
    console.log(a > b ? "First number is greater" : "Second number is greater");
    r.close();
  });
});