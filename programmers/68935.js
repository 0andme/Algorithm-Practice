function solution(n) {
  let n3 = "";
  while (n > 0) {
    n3 += n % 3;
    n = parseInt(n / 3);
  }
  let res = 0;
  for (let i = 0; i < n3.length; i += 1) {
    res += 3 ** (n3.length - i - 1) * n3[i];
  }
  return res;
}
