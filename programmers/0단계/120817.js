// 120817 배열의 평균값
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  let answer = 0;

  let sum = numbers.reduce((a, b) => a + b, 0);
  answer = sum / numbers.length;
  return answer;
}
