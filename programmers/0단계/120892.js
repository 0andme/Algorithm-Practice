// 120892 암호 해독
// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return
function solution(cipher, code) {
  let answer = "";

  for (let i = 0; i < parseInt(cipher.length / code); i++) {
    answer += cipher[code * (i + 1) - 1];
  }
  return answer;
}

//

function solution(cipher, code) {
  let answer = "";

  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
