let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().split("\n");

const n = Number(input[0]);
const data = input[1].split(" ").map(Number);

// 중복없는 배열
const setData = [...new Set(data)];
// 중복없는 배열 증가하는 순으로 정렬
setData.sort((a, b) => a - b);

// 맵형태로 저장
let mapData = new Map();
setData.forEach((num, index) => {
  mapData.set(num, index);
});

// 결과 출력
let res = "";
data.forEach((num) => {
  res += mapData.get(num) + " ";
});

console.log(res);
