function solution(s) {
  // 정규표현식으로 replace를 하면 효율성에서 에러
  let answer = [s[0]];
  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === answer[answer.length - 1]) {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }
  return answer.length ? 0 : 1;
}
