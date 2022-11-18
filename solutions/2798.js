// 2798 블랙잭
const fs = require("fs");
const input = fs.readFileSync("./2798.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ");
const data = input[1].split(" ").map(Number);
let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = data[i] + data[j] + data[k];
      if (sum <= M) {
        max = Math.max(max, sum);
      }
    }
  }
}

console.log(max);
