function solution(w, h) {
  let answer = 0;
  let width = Math.min(w, h);
  let height = Math.max(w, h);
  for (let i = 1; i < width; i += 1) {
    // 6번 실패 원인 : 곱하고 나누는 순서를 바꿔주면 된다 / * -> * /
    answer += parseInt((height * i) / width) * 2;
  }
  return answer;
}
