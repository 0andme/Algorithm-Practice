// 120860 직사각형 넓이 구하기

// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
// 사각형의 넓이를 return
function solution(dots) {
  let answer = 0;
  const [x, y] = dots[0];
  const dist = dots
    .slice(1)
    .map((dot) =>
      Math.sqrt(Math.abs(dot[0] - x) ** 2 + Math.abs(dot[1] - y) ** 2)
    );
  dist.sort((a, b) => a - b);
  dist.pop();
  answer = dist.reduce((a, b) => a * b, 1);
  return answer;
}
