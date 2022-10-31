// 120846 합성수 찾기
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return
function solution(n) {
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    let count = 2;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count > 2) {
      answer++;
    }
  }
  return answer;
}
