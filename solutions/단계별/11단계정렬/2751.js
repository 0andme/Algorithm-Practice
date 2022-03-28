const fs = require("fs");
let input = fs
  .readFileSync("./0_data.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);
const data = input.slice(1);
let res = "";
data.sort((a, b) => a - b);
data.forEach((data) => {
  res += data + "\n";
});
console.log(res);
