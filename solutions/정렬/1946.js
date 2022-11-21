// 1946 신입 사원
const fs = require("fs");
const input = fs.readFileSync("./1946.txt").toString().trim().split("\n");

const T = input.shift();
let lastPass = [];
let answer = "";

for (let i = 0; i < T; i++) {
  const N = input.shift();
  let passCnt = 1;
  const testData = input.splice(0, N).map((score) => score.split(" "));
  testData.sort((a, b) => a[0] - b[0]);
  lastPass = testData[0];

  for (let j = 1; j < N; j++) {
    if (Number(testData[j][1]) < Number(lastPass[1])) {
      passCnt++;
      lastPass = testData[j];
    }
  }
  answer += passCnt + "\n";
}
console.log(answer);

// 1. 한쪽 기준으로 일단 정렬
// 2. 마지막으로 선발되는 사람을 계속해서 갱신
// 3. 새로운 사람과 마지막으로 선발된 사람 비교

// 그리디
