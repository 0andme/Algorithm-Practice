// 120824 짝수 홀수 개수
// 정수가 담긴 리스트 num_list가 주어질 때,
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return

function solution(num_list) {
  let answer = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) answer[0]++;
    else answer[1]++;
  }
  return answer;
}
