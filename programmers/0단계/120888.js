// 120888 중복된 문자 제거

// 문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return
function solution(my_string) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}

// sol2
function solution(my_string) {
  return [...new Set(my_string)].join("");
}
