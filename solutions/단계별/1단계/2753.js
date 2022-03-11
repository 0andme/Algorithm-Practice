const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString();
// var input = fs.readFileSync('/dev/stdin').toString()
input = Number(input);
if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
  console.log("1");
} else console.log("0");
