// 120905 n의 배수 고르기
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return
function solution(n, numlist) {
  let answer = [];
  numlist.forEach((num) => {
    if (num % n === 0) {
      answer.push(num);
    }
  });
  return answer;
}

// sol2
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}
