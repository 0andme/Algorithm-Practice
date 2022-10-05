// 120851 숨어있는 숫자의 덧셈 (1)
// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return
function solution(my_string) {
  let answer = 0;
  const numList = my_string.match(/[0-9]/g);
  answer = numList.reduce((a, b) => Number(a) + Number(b), 0);
  return answer;
}

// sol2
function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => acc + Number(cur), 0);
}
