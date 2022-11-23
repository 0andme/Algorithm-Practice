// 1920수찾기
const fs = require("fs");
const input = fs.readFileSync("./1920수찾기.txt").toString().trim().split("\n");
const N = input.shift();
const aData = new Set(input.shift().split(" "));
const M = input.shift();
const bData = input.shift().split(" ");
let answer = [];
for (let i = 0; i < M; i++) {
  if (aData.has(bData[i])) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join("\n"));
