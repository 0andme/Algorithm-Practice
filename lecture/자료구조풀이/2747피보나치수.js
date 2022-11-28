// 2747피보나치수
const fs = require("fs");
const input = fs
  .readFileSync("./2747피보나치수.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

console.log(sol1());
// console.log(sol2());

/*--------------------------------
 * 재귀함수로 풀면 시간초과 발생
 * ㄴ 이미 구한 값을 다시 구하는 비효율적인 방법이기 때문
 * ㄴ 재귀적 구현의 한계인 것
 * --------------------------------
 */

// 풀이 1
function sol1() {
  let list = new Array(N + 1).fill(0);
  list[0] = 0;
  list[1] = 1;

  for (let index = 2; index <= N; index++) {
    list[index] = list[index - 1] + list[index - 2];
  }
  return list[N];
}

// 풀이 2
function sol2() {
  let n = N;
  let [a, b] = [0, 1];
  while (n > 0) {
    [a, b] = [b, a + b];
    n -= 1;
  }
  return a;
}
