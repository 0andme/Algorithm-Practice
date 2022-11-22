// 1966프린터
const fs = require("fs");
const input = fs.readFileSync("./1966프린터.txt").toString().trim().split("\n");

// CNT | 총 문서 개수
// target | 타겟이 되는 문서의 번호
// datas | 문서 별 중요도 왼쪽부터 차례대로 출력대기

const N = input.shift();
let answer = [];
for (let i = 0; i < N; i++) {
  const [CNT, target] = input.shift().split(" ");
  const datas = input.shift().split(" ");
  // [처음인덱스,문서중요도]로 데이터 변환
  const dataIndex = datas.map((p, i) => [i, p]);
  let print = [];
  while (print.length < CNT) {
    const now = dataIndex.shift();
    const nowOrigin = datas.shift();
    const max = Math.max(...datas);
    if (max > now[1]) {
      dataIndex.push(now);
      datas.push(nowOrigin);
    } else {
      print.push(now);
    }
  }
  for (let i = 0; i < CNT; i++) {
    if (print[i][0] == target) answer.push(i + 1);
  }
}
console.log(answer.join("\n"));
