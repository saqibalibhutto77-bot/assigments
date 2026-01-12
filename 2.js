const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter your age: ", a => {
console.log(a >= 18 ? "App Ahal Hein" : "App Ahal Nahi Hein");
r.close();
});