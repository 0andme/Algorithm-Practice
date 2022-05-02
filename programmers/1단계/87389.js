function solution(n) {
  let i = 2;
  while (1) {
    if (n % i === 1) {
      break;
    } else i += 1;
  }
  return i;
}
