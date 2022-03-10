const fs = require("fs");
const input = fs.readFileSync("./data.txt").toString();
// const input = fs.readFileSync('/dev/stdin').toString();
console.log(`${input}??!`);

// 유의점
// 백틱해야함
// trim으로 공백 제거도 해야함
