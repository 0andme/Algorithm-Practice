// 120886 A로 B 만들기
// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return
function solution(before, after) {
  let answer = 0;
  const [arrB, arrA] = [
    before.split("").sort().join(""),
    after.split("").sort().join(""),
  ];
  console.log(arrB, arrA);
  return arrB == arrA ? 1 : 0;
}
