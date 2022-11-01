// 120853 컨트롤 제트
// 숫자들이 공백으로 구분된 문자열이 주어집니다.
// 문자열에 있는 숫자를 차례대로 더하려고 합니다.
// 이 때 “Z”가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
// 숫자와 “Z”로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return
function solution(s) {
  let answer = [];
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "Z") {
      answer.pop();
    } else {
      answer.push(Number(arr[i]));
    }
  }
  return answer.reduce((a, b) => a + b, 0);
}
