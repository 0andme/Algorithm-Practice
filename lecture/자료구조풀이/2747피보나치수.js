// 2747피보나치수
const fs = require("fs");
const input = fs
  .readFileSync("./2747피보나치수.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let list = new Array(N + 1).fill(0);
list[0] = 0;
list[1] = 1;
let res = 0;

for (let index = 2; index <= N; index++) {
  list[index] = list[index - 1] + list[index - 2];
}

console.log(list[N]);
