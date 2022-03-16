const fs = require("fs");
let input = fs.readFileSync("0_data.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = input[0];
const datas = input[1].split(" ").map(Number);

// 방법 1
let max = datas[0];
let min = datas[0];
for (let i = 1; i < n; i += 1) {
  if (max < datas[i]) max = datas[i];
  if (min > datas[i]) min = datas[i];
}
console.log(min, max);
// 방법 2
const minValue = datas.reduce((acc, cur) => Math.min(acc, cur));
const maxValue = datas.reduce((acc, cur) => Math.max(acc, cur));
console.log(minValue, maxValue);
