// 5단계 배열 6번
// 문제
// "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
// 예를 들어, 10번 문제의 점수는 3이 된다.
// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에 테스트 케이스의 개수가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다.
// 문자열은 O와 X만으로 이루어져 있다.
// 출력
// 각 테스트 케이스마다 점수를 출력한다.

var fs = require("fs");
var input = fs.readFileSync("./data.txt").toString().split("\n");
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
for (let i = 1; i < N + 1; i++) {
  const data = input[i];
  // 각 케이스별 총합을 저장
  let sum = 0;
  // 각 결과의 점수를 계산
  let cnt = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[j] === "O") {
      // 이전 값이 O일때
      if (j > 0 && data[j - 1] === "O") {
        cnt += 1;
      } else {
        cnt = 1;
      }
      sum += cnt;
    }
  }
  console.log(sum);
}
