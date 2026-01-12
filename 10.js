const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter a number: ", n => {
n = Number(n);
console.log(n % 5 === 0 ? "Divisible by 5" : "Not divisible by 5");
r.close();
});