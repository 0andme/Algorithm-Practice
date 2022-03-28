const fs = require("fs");
let input = fs.readFileSync("0_data.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
let res = new Array(n).fill(0);

for (let i = 1; i < n + 1; i += 1) {
  let line = input[i];
  let lineNum = new Array(line.length).fill(0);
  if ("O" === line[0]) lineNum[0] = 1;
  for (let j = 1; j < line.length; j += 1) {
    if ("O" === line[j]) {
      if (lineNum[j - 1] > 0) lineNum[j] = lineNum[j - 1] + 1;
      else lineNum[j] = 1;
    }
  }
  console.log(lineNum.reduce((a, b) => a + b));
}
