// 120844 배열 회전시키기
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return

// 방법 1
function solution(numbers, direction) {
  let answer = [];
  const n = numbers.length;
  if (direction == "right") {
    const char = numbers[n - 1];
    answer = numbers.slice(0, n - 1);
    answer.unshift(char);
  } else {
    const char = numbers[0];
    answer = numbers.slice(1);
    answer.push(char);
  }
  return answer;
}

// 방법 2
// 쉬프트 언쉬프트
// 팝 푸시 사용

function solution(numbers, direction) {
  let answer = [];
  const n = numbers.length;
  if (direction == "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  answer = numbers;
  return answer;
}
