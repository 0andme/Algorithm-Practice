let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");
const line1 = input[0].split(" ");
const n = Number(line1[0]);
let money = Number(line1[1]);
const allMoney = input.slice(1).map(Number);
let cnt = 0;
for (let i = n - 1; i >= 0; i -= 1) {
  cnt += parseInt(money / allMoney[i]);
  money = money % allMoney[i];
}
console.log(cnt);
