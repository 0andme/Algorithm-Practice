function solution(n, m) {
  let answer = [];
  let gcd = 1;
  let lcm = 1;
  for (let i = 2; i <= Math.min(n, m); i += 1) {
    if (n % i == 0 && m % i == 0) {
      gcd = i;
    }
  }
  while (1) {
    if (lcm % n == 0 && lcm % m == 0) {
      break;
    }
    lcm++;
  }
  answer.push(gcd, lcm);
  return answer;
}
// 방법2
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}
