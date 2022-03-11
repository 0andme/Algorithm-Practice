var fs = require("fs");
var input = fs.readFileSync("./0_data.txt").toString().split(" ");
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const dataA = Number(input[0]);
const dataB = Number(input[1]);
console.log(dataA * dataB);
