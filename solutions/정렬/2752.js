// 2752 세수정렬
const fs = require("fs");
const input = fs.readFileSync("./2752.txt").toString().trim().split("\n");
const data = input[0].split(" ");

data.sort((a, b) => a - b);

console.log(data.join(" "));
