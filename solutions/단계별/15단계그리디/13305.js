let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().split("\n");

const n = Number(input[0]);
const dist = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);

let minCost = cost[0];
for (let i = 0; i < n; i += 1) {
  minCost = Math.min(cost[i], minCost);
  cost[i] = minCost;
}

let res = BigInt(0);

for (let i = 0; i < n - 1; i += 1) {
  res += BigInt(cost[i]) * BigInt(dist[i]);
}

console.log(String(res));
