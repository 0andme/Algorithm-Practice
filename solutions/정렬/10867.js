// 10867 중복 빼고 정렬하기

const fs = require("fs");
const input = fs.readFileSync("./10867.txt").toString().trim().split("\n");

const N = input[0];
const data = [...new Set(input[1].split(" "))].sort((a, b) => a - b).join(" ");
console.log(data);
