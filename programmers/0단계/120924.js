// 120924 다음에 올 숫자
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
// 마지막 원소 다음으로 올 숫자를 return
// 2 < common의 길이 < 1,000
// -1,000 < common의 원소 < 2,000
// 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
// 공비가 0인 경우는 없습니다.

// common의 0번 1번의 차가 1번 2번의 차랑 같으면 등차 아니면 등비

function solution(common) {
  let answer = 0;

  let isAP = common[2] - common[1] == common[1] - common[0];

  if (isAP) {
    answer = common[common.length - 1] + (common[1] - common[0]);
  } else {
    answer = common[common.length - 1] * (common[1] / common[0]);
  }
  return answer;
}
