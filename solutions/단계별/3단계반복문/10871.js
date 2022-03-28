const fs = require("fs");
let input = fs
  .readFileSync("./0_data.txt")
  .toString()
  .split("\n")
  .map((data) => {
    return data.split(" ").map(Number);
  });
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n")
//   .map((data) => {
//     return data.split(" ").map(Number);
//   });
const n = input[0][0];
const x = input[0][1];
const datas = input[1];
let out = "";
for (let i = 0; i < n; i += 1) {
  if (datas[i] < x) out += `${datas[i]} `;
}
console.log(out);
