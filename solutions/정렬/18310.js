const fs = require("fs");
const input = fs.readFileSync("./0_data.txt").toString().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const data = input[1].split(" ").map(Number);
data.sort((a, b) => a - b);

const res = data[parseInt((n - 1) / 2)];
console.log(res);
