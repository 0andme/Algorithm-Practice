const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().split("\n");
input = Number(input);
for (let i = 1; i < 10; i = i + 1) {
  console.log(`${input} * ${i} = ${input * i}`);
}
