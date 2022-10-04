// 120897 약수 구하기
// 정수 n이 매개변수로 주어질 때,
// n의 약수를 오름차순으로 담은 배열을 return

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}
