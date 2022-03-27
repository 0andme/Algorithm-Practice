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
  let data = input.slice(1);
  // 감소 배열
  let deData = JSON.parse(JSON.stringify(data));
  deData.sort((a, b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
  // 증가 배열
  let inData = JSON.parse(JSON.stringify(data));
  inData.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
  // 감소 증가 배열과 원본 배열 비교
  if (JSON.stringify(data) === JSON.stringify(inData)) {
    console.log("INCREASING");
  } else if (JSON.stringify(data) === JSON.stringify(deData)) {
    console.log("DECREASING");
  } else {
    console.log("NEITHER");
  }
}
