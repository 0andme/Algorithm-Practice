// 120850 문자열 정렬하기 (1)

// 문자열 my_string이 매개변수로 주어질 때
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return

function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map(Number)
    .sort((a, b) => a - b);
}
