// 120841  점의 위치 구하기
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return

function solution(dot) {
  let answer = 0;
  const x = dot[0];
  const y = dot[1];
  if (x > 0) {
    if (y > 0) answer = 1;
    else answer = 4;
  } else {
    if (y > 0) answer = 2;
    else answer = 3;
  }
  return answer;
}
