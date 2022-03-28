let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");

const n = Number(input[0]);

const data = input.slice(1).map((line) => line.split(" "));

data.sort((lineA, lineB) => {
  if (lineA[0] === lineB[0]) return lineA[1] - lineB[1];
  else return lineA[0] - lineB[0];
});

let res = "";
data.forEach((line) => {
  res += line[0] + " " + line[1] + "\n";
});
console.log(res);
