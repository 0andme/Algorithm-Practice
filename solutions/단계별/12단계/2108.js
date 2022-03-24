const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().split("\n").map(Number);
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number);

const n = input[0];
const data = input.slice(1);

const sum = data.reduce((a, b) => a + b);
const res1 = Math.round(sum / n);

const sortdata = data.sort((a, b) => a - b);
const midNum = parseInt(n / 2);
const res2 = data[midNum];

const res4 = Math.abs(data[0] - data[n - 1]);

console.log(res1, res2, res3, res4);
