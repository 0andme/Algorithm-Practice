function solution(absolutes, signs) {
  return absolutes.reduce((a, b, i) => (a += signs[i] ? b : -b), 0);
}
