// 120843 공 던지기
// 공 던지기 게임
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때,
// k번째로 공을 던지는 사람의 번호는 무엇인지 return
function solution(numbers, k) {
  let answer = 0;
  answer = numbers[((1 + (k - 1) * 2) % numbers.length) - 1];
  return answer;
}

//

function solution(numbers, k) {
  let answer = 0;
  answer = numbers[((k - 1) * 2) % numbers.length];
  return answer;
}
