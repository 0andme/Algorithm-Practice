const fs = require("fs");
let input = fs.readFileSync("0_data.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
let datas = input[1].split(" ").map(Number);

const maxValue = datas.reduce((a, b) => Math.max(a, b));
datas.forEach((data, index) => {
  datas[index] = (data / maxValue) * 100;
});
const avg = datas.reduce((a, b) => a + b) / n;
console.log(avg);
