// 120902 문자열 계산하기
// 문자열 my_string이 매개변수로 주어질 때,
// 수식을 계산한 값을 return

// 연산자는 + -만 존재
//  0 으로 시작하는 숫자 없음
//  잘못된 수식없음
// 5 ≤ my_string의 길이 ≤ 100
// my_string의 숫자와 연산자는 공백 하나로 구분
function solution(my_string) {
  let answer = 0;
  const data = my_string.split(" ");
  answer = Number(data[0]);
  for (let i = 1; i < data.length; i += 2) {
    if (data[i] == "+") {
      answer += Number(data[i + 1]);
    } else if (data[i] == "-") {
      answer -= Number(data[i + 1]);
    }
  }
  return answer;
}

// 별로 좋은 솔루션은 아님
var solution = eval;
