const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().split("\n");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

n = Number(input[0]);
let printText = "";
for (let i = 1; i < n + 1; i += 1) {
  const line = input[i].split(" ").map(Number);
  printText += `${line[0] + line[1]}\n`;
}
console.log(printText);
