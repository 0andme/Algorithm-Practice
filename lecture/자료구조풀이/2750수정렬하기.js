// 2750수정렬하기
// 오름차순으로 정렬
const fs = require("fs");
const input = fs
  .readFileSync("./2750수정렬하기.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const nums = input.slice(1).map(Number);
console.log(nums.sort((a, b) => a - b).join("\n"));
