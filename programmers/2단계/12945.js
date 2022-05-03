function solution(n) {
  let answer = 0;
  let arr = [0, 1];
  for (let i = 2; i <= n; i += 1) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  }
  return arr[n] % 1234567;
}
