// 120912 7의 개수
// 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return

function solution(array) {
  let answer = 0;
  const arr = array.join("").match(/7/g);
  return (answer = arr ? arr.length : 0);
}
