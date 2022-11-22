// 2920 음계
const fs = require("fs");
const input = fs.readFileSync("./2920.txt").toString().trim().split("\n");

// 풀이법 1
// const data = input[0].split(" ").join("");

// const ASC = "12345678";
// const DES = "87654321";

// if (data == ASC) {
//   console.log("ascending");
// } else if (data == DES) {
//   console.log("descending");
// } else {
//   console.log("mixed");
// }

// 풀이법 2
const data = input[0].split(" ").map(Number);
let des = true; //감소
let asc = true; //증가
let answer = "mixed";
for (let i = 0; i < 7; i++) {
  if (data[i] < data[i + 1]) {
    // 값이 증가하면
    des = false;
  } else if (data[i] > data[i + 1]) {
    asc = false;
  }
}

if (asc) {
  console.log("ascending");
} else if (des) console.log("descending");
else console.log("mixed");
