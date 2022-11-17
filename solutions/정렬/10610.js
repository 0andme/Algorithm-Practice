// 10610 30
const fs = require("fs");
const input = fs.readFileSync("./10610.txt").toString().trim().split("\n");

const data = input[0].split("");

if (!data.includes("0")) {
  console.log("-1");
} else {
  const sum = data.reduce((a, b) => (a += Number(b)), 0);
  if (sum % 3 == 0) {
    const res = data.sort((a, b) => b - a).join("");
    console.log(res);
  } else {
    console.log("-1");
  }
}
