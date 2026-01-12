const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter temperature: ", t => {
console.log(t > 30 ? "Hot Weather" : "Normal Weather");
r.close();
});