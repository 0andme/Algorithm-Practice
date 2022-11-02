// 120885 이진수 더하기
// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가
// 매개변수로 주어질 때, 두 이진수의 합을 return

// 입력값은 문자열로 된 이진수의 형태
// toString 과 parseInt 사용

function solution(bin1, bin2) {
  let answer = "";
  // 문자열을 숫자로 변환 ,뒤에 문자열이 몇진수의 형태인지 명시
  const num = parseInt(bin1, 2) + parseInt(bin2, 2);
  // 숫자를 2진수로 변환
  answer = num.toString(2);
  return answer;
}

// 간단히
function solution(a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}
