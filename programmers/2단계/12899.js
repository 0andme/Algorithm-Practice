function solution(n) {
  let answer = "";
  const nums = ["1", "2", "4"];

  while (n > 0) {
    if (n % 3) {
      answer = `${n % 3}` + answer;
      n = parseInt(n / 3);
    } else {
      answer = "4" + answer;
      n = parseInt(n / 3) - 1;
    }
  }

  return answer;
}
