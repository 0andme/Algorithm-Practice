// 120878 유한소수 판별하기

// 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

// 기약분수로 나타내었을 때,
// 분모의 소인수가 2와 5만 존재해야 합니다.

// 두 정수 a와 b가 매개변수로 주어질 때,
// a/b가 유한소수이면 1을, 무한소수라면 2를 return

// 해결방법

// 최대공약수
// a와 b의 최대공약수로 각각을 나누고
// 분모를 소인수분해 (2~분모까지) 만약 2나5가 아닌 약수를 가지면
// return 2 아니면 return 1

// 의문점 (2~분모까지 도는게 맞나?)
function solution(a, b) {
  let answer = 1;

  let funcGCD = (a, b) => (b > 0 ? funcGCD(b, a % b) : a);
  const gcd = funcGCD(a, b);
  const num = parseInt(b / gcd);

  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      // num값이 2의 배수나 5의 배수가 아닐 시
      if (i % 2 != 0 && i % 5 != 0) {
        answer = 2;
        break;
      }
    }
  }
  return answer;
}

// 간단한 로직
// 결국 목적은 유한소수인지 무한 소수인지 판별하는것
//  toFixed의 리턴 값은 문자열 형태 -> Number
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}
