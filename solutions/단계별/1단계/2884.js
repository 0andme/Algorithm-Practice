const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().split(" ");
// let input = fs.readFileSync('/dev/stdin').toString().split(" ");
const H = Number(input[0]);
const M = Number(input[1]);
let newTime = H * 60 + M - 45;
if (newTime <= 0) {
  newTime = newTime + 24 * 60;
}
let newH = parseInt(newTime / 60);
// 이 부분이 틀렸던 이유
// 24:00일 때 0:0으로 표시해야한다는 조건을 빼먹음
if (newH === 24) newH = 0;
const newM = newTime % 60;
console.log(newH, newM);
