const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString()
n = Number(input);
let text = "";
for (let i = 1; i <= n; i += 1) {
  text += `${i}\n`;
}
console.log(text);
