// 11650좌표정렬하기
const fs = require("fs");
const input = fs
  .readFileSync("./11650좌표정렬하기.txt")
  .toString()
  .trim()
  .split("\n");

// x는 증가하는 순으로
// x같으면 y도 증가하는 순으로

const N = input[0];
const data = input.slice(1);

data.sort((a, b) => {
  const [ax, ay] = a.split(" ");
  const [bx, by] = b.split(" ");
  if (ax == bx) {
    return ay - by;
  } else {
    return ax - bx;
  }
});

console.log(data.join("\n"));
