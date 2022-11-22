// 1966프린터
const fs = require("fs");
const input = fs.readFileSync("./1966프린터.txt").toString().trim().split("\n");

// 풀이법 1
// CNT | 총 문서 개수
// target | 타겟이 되는 문서의 번호
// datas | 문서 별 중요도 왼쪽부터 차례대로 출력대기
/*
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
*/
// 풀이법 2

// 현재 리스트에서 가장 큰 수가 앞에 올때까지 회전시킨 뒤 추출
// 가장 큰 수가 타켓이면서 가장 앞에 있을 때 프로그램 종료
// 인덱스 =2
// 카운트 = 프린터 된 문서 수
const N = input.shift();
for (let i = 0; i < N; i++) {
  sol2(input);
}
function sol2(input) {
  const [n, m] = input.shift().split(" ");
  // 방법 1과 마찬가지로 data에 index 정보를 추가
  let count = 0;
  const queue = input
    .shift()
    .split(" ")
    .map((p, i) => [p, i]);

  while (1) {
    const max = Math.max(...queue.map((num) => num[0]));
    if (queue[0][0] == max) {
      count++;
      if (queue[0][1] == m) {
        console.log(count);
        return;
      } else {
        queue.shift();
      }
    } else {
      queue.push(queue.shift());
    }
  }
  return;
}
