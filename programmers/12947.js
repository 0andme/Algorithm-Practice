function solution(x) {
  const strX = String(x);
  let sum = 0;
  for (char of strX) {
    sum += Number(char);
  }
  return x % sum === 0 ? true : false;
}
// 방법 2

function solution(x) {
  return !(x % (x + "").split("").reduce((a, b) => +b + +a));
}
