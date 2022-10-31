// 120848 팩토리얼
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return
// i! ≤ n
function solution(n) {
  let answer = 1;
  let count = 1;
  while (answer <= n) {
    count++;
    answer *= count;
  }
  return count - 1;
}
