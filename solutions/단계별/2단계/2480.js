const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
if (a === b && a === c) {
  console.log(10000 + a * 1000);
} else {
  if (a === b) {
    console.log(1000 + a * 100);
  } else if (b === c) {
    console.log(1000 + b * 100);
  } else if (a === c) {
    console.log(1000 + c * 100);
  } else {
    input.sort((a, b) => b - a);
    console.log(input[0] * 100);
  }
}
