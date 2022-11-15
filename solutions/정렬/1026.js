// 1026 보물
const fs = require("fs");
// /dev/stdin
const input = fs.readFileSync("./1026.txt").toString().trim().split("\n");
const n = input[0];
const aArr = input[1].split(" ").sort((a, b) => b - a);
const bArr = input[2].split(" ").sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < n; i++) {
  answer += Number(aArr[i]) * Number(bArr[i]);
}

console.log(answer);
