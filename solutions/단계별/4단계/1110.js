const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().trim();
// let input = fs.readFileSync("/dev/stdin").toString().trim();
let i = 0;
let temp = 0;
input = Number(input);
const origin = input;
while (1) {
  temp = parseInt(input / 10) + (input % 10);
  input = (input % 10) * 10 + (temp % 10);
  i += 1;
  if (input === origin) break;
}
console.log(i);
