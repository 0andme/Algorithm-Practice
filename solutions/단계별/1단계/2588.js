const fs = require("fs");
let input = fs.readFileSync("./data.txt").toString().split("\n");
// var input = fs.readFileSync('/dev/stdin').toString().split("\n");
const numA = Number(input[0]);
const numB = Number(input[1]);
const print3 = numA * parseInt(numB % 10);
const print4 = numA * parseInt((numB % 100) / 10);
const print5 = numA * parseInt(numB / 100);
console.log(print3);
console.log(print4);
console.log(print5);
console.log(print3 + 10 * print4 + 100 * print5);
