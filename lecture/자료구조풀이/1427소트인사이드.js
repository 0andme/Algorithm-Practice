// 1427소트인사이드
const fs = require("fs");
const input = fs
  .readFileSync("./1427소트인사이드.txt")
  .toString()
  .trim()
  .split("\n");

const data = input[0];

console.log(
  data
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
