// 120911 문자열 정렬하기 (2)
// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return
function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}
