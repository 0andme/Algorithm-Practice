// 10815 숫자 카드
const fs = require("fs");
const input = fs.readFileSync("./10815.txt").toString().trim().split("\n");
const N = input[0];
const nums = input[1].split(" ");
const M = input[2];
const targetN = input[3].split(" ");

const map = new Map();
for (let i = 0; i < N; i++) {
  if (map.has(nums[i])) {
    map.set(nums[i], map.get(nums[i]) + 1);
  } else {
    map.set(nums[i], 1);
  }
}
let answer = [];
for (let i = 0; i < M; i++) {
  const n = map.has(targetN[i]) ? 1 : 0;
  answer.push(n);
}

console.log(answer.join(" "));
