// 2217 로프
const fs = require("fs");
const input = fs.readFileSync("./2217.txt").toString().trim().split("\n");

const n = input[0];
const data = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
const res = [];

for (let i = 0; i < n; i++) {
  res.push(data[i] * (n - i));
}

console.log(Math.max(...res));
