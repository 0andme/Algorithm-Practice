const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString()

const n = Number(input);
let text = "";
for (let index = 0; index < n; index += 1) {
  for (let j = 0; j < index + 1; j++) {
    text += "*";
  }
  text += "\n";
}
console.log(text);
