function solution(n) {
  let answer = n;
  let oneNum = n.toString(2).match(/1/g).length;

  while (1) {
    answer += 1;

    if (answer.toString(2).match(/1/g).length === oneNum) {
      break;
    }
  }
  return answer;
}
