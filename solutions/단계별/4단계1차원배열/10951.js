const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let i = 0;
let text = "";
while (i < input.length) {
  const line = input[i].split(" ").map(Number);
  text += `${line[0] + line[1]}\n`;
  i += 1;
}
console.log(text);
