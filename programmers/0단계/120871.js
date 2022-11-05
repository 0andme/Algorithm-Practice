// 120871 저주의 숫자 3
// 3의 배수와 숫자 3을 사용하지 않습니다
// 정수 n이 매개변수로 주어질 때,
// n을 3x 마을에서 사용하는 숫자로 바꿔 return
// 1 ≤ n ≤ 100

function solution(n) {
  let answer = 0;
  let _3xData = [];
  let start = 1;
  while (_3xData.length < 100) {
    if (start % 3 != 0 && !start.toString().includes("3")) {
      _3xData.push(start);
    }
    start++;
  }
  return _3xData[n - 1];
}
