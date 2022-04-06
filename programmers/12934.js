function solution(n) {
  const sqrt = parseInt(Math.sqrt(n));
  if (Math.pow(sqrt, 2) === n) return Math.pow(sqrt + 1, 2);
  else return -1;
}
