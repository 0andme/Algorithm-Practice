const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
let text = "";
for (let index = 1; index < n + 1; index += 1) {
  const data = input[index].split(" ").map(Number);
  console.log(`Case #${index}: ${data[0]} + ${data[1]} = ${data[0] + data[1]}`);
}
