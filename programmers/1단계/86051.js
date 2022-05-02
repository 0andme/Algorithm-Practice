function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i += 1) {
    if (numbers.indexOf(i) < 0) answer += i;
  }
  return answer;
}
