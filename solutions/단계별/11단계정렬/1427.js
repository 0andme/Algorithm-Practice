let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
let input = fs.readFileSync("./0_data.txt").toString().trim();

const Num = input;
const arr = [];
for (let char of Num) {
  arr.push(char);
}

arr.sort((a, b) => b - a);
let res = "";
arr.forEach((char) => {
  res += char;
});

console.log(res);
