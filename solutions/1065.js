// 문제
// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다
// 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
// N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.
var fs = require("fs");
var input = fs.readFileSync("./data.txt").toString().split("\n");
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
console.log(func(n));

function func(num) {
  let cnt = 0;
  if (num === 1000) {
    num = 999;
  }
  if (num < 100) {
    cnt = num;
  } else {
    cnt = 99;
    for (let i = 100; i <= num; i++) {
      i = String(i);
      let a = Number(i[0]);
      let b = Number(i[1]);
      let c = Number(i[2]);
      if (a - b === b - c) {
        cnt += 1;
      }
    }
  }
  return cnt;
}
