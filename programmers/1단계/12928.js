function solution(n) {
  let res = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) res += i;
  }
  return res;
}
