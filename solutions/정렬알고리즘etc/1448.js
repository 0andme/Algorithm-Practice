// 문제
// 세준이는 N개의 빨대를 가지고 있다.
// N개의 빨대 중에 3개의 빨대를 선택했을 때, 이 빨대로 삼각형을 만들 수 있다면,
// 세 변의 길이의 합의 최댓값을 구하고 싶다.

// 입력
// 첫째 줄에 빨대의 개수 N이 주어진다.
// N은 3보다 크거나 같고, 1,000,000보다 작거나 같은 자연수이다.
// 둘째 줄부터 N개의 줄에 빨대의 길이가 한 줄에 하나씩 주어진다.
// 빨대의 길이는 1,000,000보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄에 삼각형 세 변의 길이의 합의 최댓값을 출력한다. 만약 삼각형을 만들 수 없으면 -1을 출력한다.

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require("fs").readFileSync("./data.txt").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
// 오름차순 정렬
arr.sort((a, b) => a - b);
// 기본값을 -1로 설정
let res = -1;

for (let i = 0; i < n - 2; i++) {
  // 인접한 세개의 값을 가져와
  let a = arr[i];
  let b = arr[i + 1];
  let c = arr[i + 2];
  // 삼각형이 될수있는 조건을 확인
  if (a + b > c) {
    // 오름차순 정렬된 배열이니까
    res = a + b + c;
  }
}
console.log(res);
