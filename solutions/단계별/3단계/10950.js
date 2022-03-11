const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().split("\n");
// let input = fs.readFileSync('/dev/stdin').toString().split("\n");
n = Number(input[0]);
for (let i = 0; i < n; i = i + 1) {
  const line = input[i + 1].split(" ").map(Number);
  console.log(line[0] + line[1]);
}
