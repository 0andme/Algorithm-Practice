const fs = require("fs");
let input = fs.readFileSync("0_data.txt").toString().split("\n").map(Number);
// let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let maxValue = input[0];
let maxIndex = 0;
for (let i = 1; i < input.length; i += 1) {
  if (input[i] > maxValue) {
    maxValue = input[i];
    maxIndex = i;
  }
}
console.log(maxValue);
console.log(maxIndex + 1);
