const r = require("readline").createInterface({ input: process.stdin, output: process.stdout });

r.question("Enter your marks: ", m => {
  m = Number(m);
  console.log(
    m >= 80 ? "Grade A" :
    m >= 60 ? "Grade B" :
    m >= 40 ? "Grade C" : "Fail"
  );
  r.close();
});