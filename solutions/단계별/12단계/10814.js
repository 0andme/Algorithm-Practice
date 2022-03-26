let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");
const n = Number(input[0]);

const datas = input.slice(1).map((line) => line.split(" "));

datas.sort((a, b) => {
  // 나이가 같으면 먼저 온 사람 먼저 - 소트 없음
  if (a[0] === b[0]) return 0;
  // 나이가 다르면 나이가 증가하는 순으로
  else return a[0] - b[0];
});

let res = "";
datas.forEach((line) => {
  res += line[0] + " " + line[1] + "\n";
});
console.log(res);
