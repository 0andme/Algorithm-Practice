const fs = require("fs");
const input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const data = input.slice(1).map(Number);
// 오름차순 정렬
data.sort((a, b) => a - b);

let res = -1;
for (let i = 0; i < n - 2; i += 1) {
  if (data[i] + data[i + 1] > data[i + 2]) {
    res = data[i] + data[i] + data[i + 1];
  }
}

console.log(res);
