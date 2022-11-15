// 10817-세-수;
// 세 개의 정수 중 두번째로 큰 수를 출력

const fs = require("fs");
/dev/stdin
const input = fs
  .readFileSync("./10817.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ");

input.sort((a, b) => a - b);
console.log(input[1]);
