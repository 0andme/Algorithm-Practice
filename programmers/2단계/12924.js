function solution(n) {
  let answer = 1;
  for (let i = 1; i < n; i += 1) {
    let sum = 0;
    for (j = i; j < n; j += 1) {
      sum += j;
      if (sum >= n) {
        if (sum === n) answer += 1;
        break;
      }
    }
  }
  return answer;
}
