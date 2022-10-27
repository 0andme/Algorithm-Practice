// 120891 369게임
// 머쓱이는 친구들과 369게임을 하고 있습니다.
// 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return

// 방법 1
// for문 돌며 문자 확인
function solution(order) {
  let answer = 0;
  const arr = order.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 3 || arr[i] == 6 || arr[i] == 9) {
      answer++;
    }
  }
  return answer;
}
// 방법 2
//  정규표현식 이용

function solution(order) {
  let answer = 0;
  answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
