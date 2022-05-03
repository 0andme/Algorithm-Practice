function solution(s) {
  let answer = s.length;
  for (let i = 1; i <= s.length - i; i++) {
    let str = s.split(/.{2}/g);
    let cnt = 1;
    let res = "";
    for (let j = 0; j <= s.length; j += i) {
      let a = s.slice(j, j + i);
      let b = s.slice(j + i, j + 2 * i);
      if (a === b) {
        cnt++;
      } else {
        res += `${cnt > 1 ? cnt : ""}${a}`;
        cnt = 1;
      }
    }
    answer = Math.min(answer, res.length);
  }
  return answer;
}
