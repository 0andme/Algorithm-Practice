const fs = require("fs");
let input = fs.readFileSync("./0_data.txt").toString();
// var input = fs.readFileSync('/dev/stdin').toString();
input = Number(input);
console.log(input - 543);
