// 120818 옷가게 할인 받기
// 머쓱이네 옷가게는 10만 원 이상 사면 5%,
// 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return

function solution(price) {
  let answer = 0;
  if (price >= 500000) answer = price * 0.8;
  else if (price >= 300000) answer = price * 0.9;
  else if (price >= 100000) answer = price * 0.95;
  else answer = price;

  return parseInt(answer);
}
