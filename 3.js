const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter a number: ", n => {
  n = Number(n);
  console.log(n > 0 ? "Positive Number" : n < 0 ? "Negative Number" : "Zero");
  r.close();
});