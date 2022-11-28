// 1047Z

const fs = require("fs");
const input = fs.readFileSync("./1047Z.txt").toString().trim().split("\n");

const [N, X, Y] = input[0].split(" ").map(Number);
let res = 0;
sol(0, 0, 2 ** N);

function sol(row, col, size) {
  if (row === X && col === Y) {
    console.log(res);
    return;
  }
  if (X >= row && X < row + size && Y >= col && Y < col + size) {
    // 영역 내에 있음
    size = parseInt(size / 2);
    sol(row, col, size);
    sol(row, col + size, size);
    sol(row + size, col, size);
    sol(row + size, col + size, size);
  } else res += size * size; // 좌표 못 찾음!
}
