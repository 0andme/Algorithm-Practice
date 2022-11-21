// 1302 베스트셀러
const fs = require("fs");
const input = fs.readFileSync("./1302.txt").toString().trim().split("\n");

const N = input[0];
const data = input.slice(1);

const obj = {};

for (let i = 0; i < N; i++) {
  if (obj.hasOwnProperty(data[i])) {
    obj[data[i]] += 1;
  } else {
    obj[data[i]] = 1;
  }
}

const max = Math.max(...Object.values(obj));
const answer = Object.keys(obj)
  .filter((key) => obj[key] == max)
  .sort()[0];

console.log(answer);
