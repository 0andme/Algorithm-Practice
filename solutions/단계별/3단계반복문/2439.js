const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString();
n = Number(input);
let text = "";
for (let i = 1; i < n + 1; i = i + 1) {
  for (let j = 0; j < n - i; j = j + 1) {
    text += " ";
  }
  for (let k = 0; k < i; k = k + 1) {
    text += "*";
  }
  text += "\n";
}
console.log(text);
