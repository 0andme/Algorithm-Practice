// 120837 개미 군단
// 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
// 사냥감의 체력 hp가 매개변수로 주어질 때,
// 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return
function solution(hp) {
  let answer = 0;

  answer += parseInt(hp / 5);
  hp = hp % 5;
  answer += parseInt(hp / 3);
  hp = hp % 3;
  answer += hp;

  return answer;
}
