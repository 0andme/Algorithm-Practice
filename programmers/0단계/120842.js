// 120842 2차원으로 만들기
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다.
// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return
function solution(num_list, n) {
  let answer = [];
  const col = parseInt(num_list.length / n);
  for (let i = 0; i < col; i++) {
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer;
}
