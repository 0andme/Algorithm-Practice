const fs = require("fs");
let input = fs
  .readFileSync("0_data.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let data = input.reduce((acc, cur) => acc * cur).toString();
let count = new Array(10).fill(0);

for (let i = 0; i < data.length; i += 1) {
  count[data[i]] += 1;
}

for (let i = 0; i < count.length; i += 1) {
  console.log(count[i]);
}
