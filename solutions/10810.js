// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다
// 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다
//모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

var fs = require("fs");
var input = fs.readFileSync("./data.txt").toString().split("\n");
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
// 숫자 배열로 만드는게 가장 중요
const li = input[1].split(" ").map(Number);

let min = li[0];
let max = li[0];

for (let i = 1; i < n; i++) {
  if (min >= li[i]) {
    min = li[i];
  }
  if (max <= li[i]) {
    max = li[i];
  }
}
console.log(min, max);
