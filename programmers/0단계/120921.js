// 120921 문자열 밀기

// 문자열 A와 B가 매개변수로 주어질 때,
// A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return
// B가 될 수 없으면 -1을 return
// -> 오른쪽으로 한칸씩 밀기
function solution(A, B) {
  let answer = -1;
  let arr = A.split("");
  if (A == B) return 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = [arr.pop(), ...arr];
    if (temp.join("") == B) {
      answer = i + 1;
      break;
    }
    arr = [...temp];
  }
  return answer;
}
