// 120808 분수의 덧셈

// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1,
// 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return
function solution(denum1, num1, denum2, num2) {
  let answer = [];

  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  // 최대 공약수 활용
  const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
  const gcd = getGCD(denum, num);
  return [denum / gcd, num / gcd];
  return answer;
}
