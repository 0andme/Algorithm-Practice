// 120876 겹치는 선분의 길이
// 빨간색, 초록색, 파란색 선분이 x축 위에 있습니다.
// 세 선분의 x좌표 시작과 끝이 [[start, end], [start, end], [start, end]]
// 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때,
// 두 개 이상의 선분이 겹치는 부분의 길이를 return

function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y); i < Math.max(x, y); i++)
      a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});

  return Object.values(visited).filter((v) => v > 1).length;
}

// 직관적인 풀이 2
// -100 부터 100개의 배열...을 0으로 채우고 시작
// for문 돌며 스타트 부터 엔드까지의 값 1씩증가
// 배열의 값이 2인 배열사이즈 리턴

function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
