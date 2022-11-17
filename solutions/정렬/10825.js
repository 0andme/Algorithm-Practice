// 10825 국영수
const fs = require("fs");
const input = fs.readFileSync("./10825.txt").toString().trim().split("\n");

const n = input[0];
const data = input.slice(1).map((line) => line.split(" "));

data.sort((a, b) => {
  if (a[1] == b[1]) {
    if (a[2] == b[2]) {
      if (a[3] == b[3]) {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else return 0;
      } else {
        return b[3] - a[3];
      }
    } else {
      return a[2] - b[2];
    }
  } else {
    return b[1] - a[1];
  }
});
let answer = "";
for (let i = 0; i < n; i++) {
  answer += data[i][0] + "\n";
}
console.log(answer);
