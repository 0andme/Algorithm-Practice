// 120896 한 번만 등장한 문자
// 문자열 s가 매개변수로 주어집니다.
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return
function solution(s) {
  let answer = [];
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    //  객체에 있으면 +1
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  // 값이 1인 키 값만 필터   // 사전 순으로 정렬
  answer = Object.keys(obj)
    .filter((key) => obj[key] == 1)
    .sort()
    .join("");
  return answer;
}
