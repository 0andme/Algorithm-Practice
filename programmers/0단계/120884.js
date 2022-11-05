// 120884 치킨 쿠폰
// 한 마리당 쿠폰을 한 장 발급
// 열 장 모으면 치킨을 한 마리 서비스
// 서비스 치킨에도 쿠폰이 발급
// 시켜먹은 치킨의 수 chicken 이 매개변수로 주어질 때
// 받을 수 있는 최대 서비스 치킨의 수를 return

// 0 ≤ chicken ≤ 1,000,000

// sol 재귀함수 이용

// function a(치킨){
//   만약 치킨이 10미만이면 return 0
//   서비스 = 치킨 /10
//   쿠폰 = 서비스 + 치킨%10
//   리턴 서비스 + a(쿠폰)

// }

function solution(chicken) {
  let answer = 0;
  answer = countService(chicken);
  return answer;
}

function countService(chicken) {
  if (chicken < 10) return 0;

  let service = parseInt(chicken / 10);
  let coupon = service + (chicken % 10);
  return service + countService(coupon);
}
