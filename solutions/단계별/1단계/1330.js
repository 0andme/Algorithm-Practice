const fs = require("fs");
let input = fs.readFileSync("./data.txt").toString().split(" ");
// let input = fs.readFileSync('/dev/stdin').toString().split(" ");
const dataA = Number(input[0]);
const dataB = Number(input[1]);
if (dataA > dataB) console.log(">");
else if (dataA < dataB) console.log("<");
else {
  console.log("==");
}
