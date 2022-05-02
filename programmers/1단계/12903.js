function solution(s) {
  const n = s.length;
  const start = parseInt(n / 2);
  return n % 2 === 0
    ? s.slice(start - 1, start + 1)
    : s.slice(start, start + 1);
}
