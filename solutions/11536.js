// 줄 세우기
// 입력
// 첫째 줄에 N개의 이름이 주어진다. (2 ≤ N ≤ 20)
// 다음 N개의 줄에는 각 선수들의 이름이 주어진다
// 이름은 2 이상 12 이하의 대문자로만 이루어져있다. 선수의 이름은 중복되지 않는다.
// 출력
// 이름이 증가하는 순으로 나타나면 INCREASING, 감소하는 순이면 DECREASING을 한 줄에 출력한다.
// 만약 위의 두 경우가 아니라면 NEITHER를 출력한다.
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  let n = Number(input[0]);
  let names = [];
  for (let i = 1; i <= n; i++) {
    names.push(input[i]);
  }
  let increasing = true;
  let decreasing = true;
  for (let i = 0; i < n - 1; i++) {
    if (names[i] < names[i + 1]) {
      // 증가한다면
      decreasing = false;
    } else if (names[i] > names[i + 1]) {
      // 감소한다면
      increasing = false;
    }
  }
  if (increasing) console.log("INCREASING");
  else if (decreasing) console.log("DECREASING");
  else console.log("NEITHER");
}
