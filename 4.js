const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter your marks: ", m => {
console.log(m >= 40 ? "Pass" : "Fail");
r.close();
});