function solution(arr) {
  return arr.reduce((a, b) => {
    let gcd = funcGcd(a, b);
    return (a * b) / gcd;
  });
}

function funcGcd(a, b) {
  return b > 0 ? funcGcd(b, a % b) : a;
}
