// 특정 문자 제거하기
// my_string에서 letter 문자열을 제외한 문자열을 return
function solution(my_string, letter) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] != letter) {
      answer += my_string[i];
    }
  }

  return answer;
}
