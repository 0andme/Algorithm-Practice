const fs = require("fs");
let n = fs.readFileSync("./0_data.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString()
n = Number(n);
let text = "";
for (let i = n; i > 0; i -= 1) {
  text += `${i}\n`;
}
console.log(text);
