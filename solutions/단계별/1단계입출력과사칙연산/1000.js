var fs = require("fs");
var input = fs.readFileSync("./0_data.txt").toString().split(" ");
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(input[0]) + Number(input[1]));
