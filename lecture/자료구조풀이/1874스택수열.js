// 1874 스택 수열

const fs = require("fs");
const input = fs
  .readFileSync("./1874스택수열.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const data = input.slice(1).map(Number);

let count = 1;
let stack = [];
let result = [];

let answer = "";
for (let i = 1; i <= N; i++) {
  while (count <= data[i - 1]) {
    stack.push(count);
    result.push("+");
    count++;
  }
  if (stack[stack.length - 1] == data[i - 1]) {
    stack.pop();
    result.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(result.join("\n"));
