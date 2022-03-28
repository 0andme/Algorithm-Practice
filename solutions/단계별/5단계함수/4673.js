// num의 num+각 자리 수의 합을 구하는 함수
function funcSelfNum(num) {
  let sum = num;
  let str = num.toString();
  for (let char of str) {
    sum += Number(char);
  }
  return sum;
}
// set 객체를 선언
let resArr = new Set();
for (let i = 0; i <= 10000; i += 1) {
  // 만번 돌며 i의 i+i의 각자리수 합을 set객체에 저장
  resArr.add(funcSelfNum(i));
}
for (let i = 1; i <= 10000; i += 1) {
  // 만번 돌며 set객체에 i가 없으면 출력
  if (!resArr.has(i)) {
    console.log(i);
  }
}
