const fs = require("fs");
let input = fs.readFileSync("0_data.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i += 1) {
  const line = input[i].split(" ").map(Number);
  const n = line[0];
  const data = line.slice(1);
  const avg = data.reduce((a, b) => a + b) / n;
  let avgStd = 0;
  data.forEach((std) => {
    if (std > avg) avgStd += 1;
  });
  console.log(`${((avgStd / n) * 100).toFixed(3)}%`);
}
