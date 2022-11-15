// 11650 좌표 정렬하기
const fs = require("fs");
const input = fs.readFileSync("./11650.txt").toString().trim().split("\n");
// /dev/stdin
const n = input[0];
const data = input.slice(1).map((line) => line.split(" "));

data.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  } else return a[0] - b[0];
});
console.log(data.map((line) => line.join(" ")).join("\n"));
