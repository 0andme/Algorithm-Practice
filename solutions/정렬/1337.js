const fs = require("fs");
const input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let data = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let result = 0; // 연속적인 수열 길이의 최댓값
for (let i = 0; i < n; i++) {
  let cnt = 0; // 현재 수부터의 연속적인 수열 길이
  for (let j = 0; j < 5; j++) {
    // 값 + 0 값 + 1 ... 값+5이 존재하는지 확인
    if (data.slice(i, i + 5).includes(data[i] + j)) {
      cnt += 1;
    }
    result = Math.max(result, cnt);
  }
}

console.log(5 - result);
