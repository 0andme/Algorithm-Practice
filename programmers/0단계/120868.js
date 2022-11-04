// 120868 삼각형의 완성조건 (2)
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 나머지 한 변이 될 수 있는 정수의 개수를 return

function solution(sides) {
  let answer = 0;
  const max = Math.max(...sides);
  const min = Math.min(...sides);

  // 가장 긴 변이 sides에서 큰 값일 떄
  for (let i = 1; i <= max; i++) {
    if (min + i > max) {
      answer++;
    } else continue;
  }
  // 구하려는 값이 가장 긴 변일 때
  let start = max + 1;
  while (1) {
    if (max + min > start) {
      answer++;
    } else break;
    start++;
  }
  return answer;
}
