let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("./0_data.txt").toString().trim().split("\n");

const n = Number(input[0]);
let data = input.slice(1).map((line) => line.split(" ").map(Number));
// 1) 종료 시점 2) 시작 시점을 우선순위로 오름차순 정렬
data.sort((a, b) => {
  // 종료 시점이 다르면
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let cnt = 1;
let cur = 0; // 첫 번째 회의부터 확인

for (let i = 1; i < n; i++) {
  if (data[i][0] >= data[cur][1]) {
    cur = i;
    cnt += 1;
  }
}

console.log(cnt);
