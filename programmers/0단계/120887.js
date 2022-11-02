// 120887 k의 개수
// 정수 i, j, k가 매개변수로 주어질 때,
// i부터 j까지 k가 몇 번 등장하는지 return
// 1 ≤ i < j ≤ 100,000
// 0 ≤ k ≤ 9
function solution(i, j, k) {
  // i부터 j까지의 숫자를 문자열로이어붙이고 split
  // k를 찾는 정규식(match->length) 혹은 for문
  let answer = 0;
  let str = "";
  for (let char = i; char <= j; char++) {
    str += char;
  }
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == k) answer++;
  }
  return answer;
}
