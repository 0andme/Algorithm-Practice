// 42587 프린터
// 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발

// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

// 문서의 중요도가 순서대로 담긴 배열 priorities와
// 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때,
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return
function solution(priorities, location) {
  let ready = priorities.map((data, i) => [`${i}`, data]);
  let print = [];

  while (ready.length > 0) {
    const now = ready.shift();
    if (Math.max(...ready.map((data) => data[1])) > now[1]) {
      ready.push(now);
    } else {
      print.push(now);
    }
  }
  const res = print.map((n) => Number(n[0]));
  return res.indexOf(location) + 1;
}
