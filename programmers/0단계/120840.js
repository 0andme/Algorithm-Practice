// 120840 구슬을 나누는 경우의 수
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return
function solution(balls, share) {
  let answer = 1;

  for (let i = 0; i < share; i++) {
    answer *= balls - i;
    answer /= share - i;
  }

  return answer;
}

//

function solution(balls, share) {
  let answer = BigInt(1);
  for (let i = 0; i < share; i++) {
    answer *= BigInt(balls - i);
  }
  for (let i = 0; i < share; i++) {
    answer /= BigInt(share - i);
  }
  return answer;
}
