// 120903 배열의 유사도

// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return

// s1과 s2는 각각 중복된 원소를 갖지 않습니다.

function solution(s1, s2) {
  let answer = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) answer++;
  }
  return answer;
}
