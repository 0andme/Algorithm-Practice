// 10814나이순정렬
const fs = require("fs");
const input = fs
  .readFileSync("./10814나이순정렬.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const data = input.map((info) => info.split(" "));
console.log(sol(data));

function sol(data) {
  data.sort((a, b) => {
    if (a[0] == b[0]) {
      return 0;
    } else {
      return a[0] - b[0];
    }
  });
  return data.map((info) => info.join(" ")).join("\n");
}
