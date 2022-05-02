function solution(a, b) {
  let sum = 0;
  a.forEach((num, i) => {
    sum += num * b[i];
  });
  return sum;
}
// 방법 2
function solution(A, B) {
  return A.reduce((a, b, i) => (a += b * B[i]), 0);
}
