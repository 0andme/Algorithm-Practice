// 10989수정렬하기3
// 내장된 sort함수로는 풀 수 없는 문제
// node.js에서는 메모리 초과로 풀 수 없는 문제
// 파이썬으로 풀 경우 - 계수 정렬을 이용

const fs = require("fs");
const input = fs
  .readFileSync("./10989수정렬하기3.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let cnt = Array(10001).fill(0);

for (let i = 1; i <= n; i++) {
  let cur = Number(input[i]);
  cnt[cur] += 1;
}

let answer = "";
for (let i = 1; i <= 10000; i++) {
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + "\n";
  }
}
console.log(answer);
