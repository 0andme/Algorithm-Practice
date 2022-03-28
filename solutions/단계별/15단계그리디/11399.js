let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().split("\n");

const n = Number(input[0]);
const data = input[1].split(" ").map(Number);

data.sort((a, b) => a - b);

let sum = data[0];
let res = data[0];

for (let i = 1; i < n; i += 1) {
  sum += data[i];
  res += sum;
}

console.log(res);
