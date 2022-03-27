const fs = require("fs");
const input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0].split(" ")[0]);
const data = input[1].split(" ");

let mapData = new Map();

data.forEach((num) => {
  if (mapData.has(num)) {
    mapData.set(num, mapData.get(num) + 1);
  } else {
    mapData.set(num, 1);
  }
});
const sortedMap = [...mapData.entries()].sort((a, b) => b[1] - a[1]);

let res = "";
sortedMap.forEach((data) => {
  const n = data[1];
  const char = data[0];
  for (let i = 0; i < n; i += 1) {
    res += char + " ";
  }
});

console.log(res);
