let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");
const n = Number(input[0]);
const data = input.slice(1);
let setObj = new Set(data);
// 중복없는 단어 데이터 배열
const setData = [...setObj];
setData.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  } else {
    return a.length - b.length;
  }
});

let res = "";
setData.forEach((char) => {
  res += char + "\n";
});
console.log(res);
