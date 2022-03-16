const fs = require("fs");
let input = fs
  .readFileSync("0_data.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// let input = fs.readFileSync("/dev/stdin").trim().toString().split("\n").map(Number);
let setArr = new Set();

input.map((data) => {
  setArr.add(data % 42);
});

console.log(setArr.size);
