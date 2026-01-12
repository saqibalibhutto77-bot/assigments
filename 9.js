const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter a day: ", day => {
console.log(day === "Sunday" ? "Holiday" : "Working Day");
r.close();
});