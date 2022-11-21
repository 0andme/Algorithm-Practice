// 11656  접미사 배열
const fs = require("fs");
const input = fs.readFileSync("./11656.txt").toString().trim().split("\n");

const str = input[0];

// 1. 모든 접미사를 배열에 담기

const suffixArr = [];
for (let i = 0; i < str.length; i++) {
  suffixArr.push(str.slice(i));
}
// 2. 사전순으로 정렬하고 출력
suffixArr.sort();
let answer = suffixArr.join("\n");
console.log(answer);
