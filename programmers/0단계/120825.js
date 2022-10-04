// 120825 문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return

function solution(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }
  return answer;
}
