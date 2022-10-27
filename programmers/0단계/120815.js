// 120815 피자 나눠 먹기 (2)
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
// 최소 몇 판을 시켜야 하는지를 return

// 방법 1.
//  n과 6의 최소공배수를 구하기

function solution(n) {
  let answer = 0;
  // 1. 최대공약수를 구하고
  // 2. 최소공배수를 구한 다음
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const nGcd = gcd(n, 6);
  const nLcm = lcm(n, 6);
  // 3. 6으로 나누면 피자가 몇 판 필요한지 알 수 있다.
  return nLcm / 6;
}

//  방법 2
// 루프를 돌며
//  피자의 총 조각수를 사람 수대로 나눴을 때 나머지가 0이 되면 루프 멈춤
function solution(n) {
  let answer = 0;
  let i = 1;
  while (1) {
    if ((i * 6) % n == 0) break;
    else i++;
  }

  return i;
}
