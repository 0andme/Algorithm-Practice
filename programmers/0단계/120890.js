// 120890 가까운 수
// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return
function solution(array, n) {
  let answer = array.reduce((a, b, i) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);
    if (diffA < diffB) return a;
    else if (diffA == diffB) return Math.min(a, b);
    else return b;
  });
  return answer;
}
