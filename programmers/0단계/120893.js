// 120893 대문자와 소문자
// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return

function solution(my_string) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (/[a-z]/.test(my_string[i])) {
      answer += my_string[i].toUpperCase();
    } else {
      answer += my_string[i].toLowerCase();
    }
  }
  return answer;
}
