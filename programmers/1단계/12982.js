function solution(d, budget) {
  d.sort((a, b) => a - b);
  let res = 0;
  let i = 0;
  while (budget >= d[i]) {
    res += 1;
    budget -= d[i];
    i += 1;
  }
  return res;
}
