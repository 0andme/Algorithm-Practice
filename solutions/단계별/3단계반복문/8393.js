const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString()
n = Number(input);
let sum = 0;
for (let index = 1; index <= n; index += 1) {
  sum += index;
}

console.log(sum);
