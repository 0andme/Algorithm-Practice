function solution(n) {
  // 0~n+1개의 배열 true로 채우기
  // 0~1은 false로 채우기
  let arr = new Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i <= n; i += 1) {
    if (arr[i]) {
      // 만약 트루면
      // 그 값의 배수들은 모두 false로 바꾸기
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((num) => num === true).length;
}
