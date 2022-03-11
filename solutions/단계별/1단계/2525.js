const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().split("\n");
// let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const nowTime = input[0].split(" ");
const nowTimeH = Number(nowTime[0]);
const nowTimeM = Number(nowTime[1]);
const needTime = Number(input[1]);

let newTimeM = nowTimeM + needTime;
let newTimeH = nowTimeH + parseInt(newTimeM / 60);
// 한번 틀린 이유
// 총 시간의 시 값이 24이상이면 (해당 값 -24)한 값으로 변경해야함
if (newTimeH >= 24) newTimeH = newTimeH - 24;
newTimeM = newTimeM % 60;
console.log(newTimeH, newTimeM);
