const fs = require("fs");
let input = fs.readFileSync("0_data.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
input = Number(input);
let res = 0;

for (let i = 1; i <= input; i += 1) {
  if (i < 100) {
    res += 1;
    continue;
  }
  const num = i.toString();
  let diff = new Set();
  for (let j = 0; j < num.length - 1; j += 1) {
    diff.add(Number(num[j]) - Number(num[j + 1]));
  }
  if (diff.size === 1) {
    res += 1;
  }
}
console.log(res);
