// 120899 가장 큰 수 찾기
// 정수 배열 array가 매개변수로 주어질 때,
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return
function solution(array) {
  let answer = [];
  const max = Math.max(...array);
  answer.push(max);
  answer.push(array.indexOf(max));

  return answer;
}
