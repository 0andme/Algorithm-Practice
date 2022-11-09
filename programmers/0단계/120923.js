// 120923 연속된 수의 합
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
// 두 정수 num과 total이 주어집니다.
// 연속된 수 num개를 더한 값이 total이 될 때,
// 정수 배열을 오름차순으로 담아 return

// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없다.

// 풀이법 | 자연수의 합을 변형한 풀이법
// 구하는 배열의 처음 값을 a라고 한다면
// (a )+ (a+1) + ... (a+n-2)  + (a+n-1)  = 토탈
// (a+n-1) + (a+n-2)+ ...  +  (a+1)   +   (a ) = 토탈
// 1 2 ... n
// 위 아래 식 더하면
// 2 토탈 = (2a+n-1) (2a+n-1) (2a+n-1) (2a+n-1) = (2a+n-1)*n
// 위의 식을 변형하여 a를 구하면
// a= (2*total/n + 1 - n) / 2;

function solution(num, total) {
  let answer = [];
  let a = ((2 * total) / num + 1 - num) / 2;
  for (let index = 0; index < num; index++) {
    answer.push(a);
    a++;
  }
  return answer;
}
