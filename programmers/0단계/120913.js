// 120913 잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때,
// my_str을 길이 n씩 잘라서 저장한 배열을 return

// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이

function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}
