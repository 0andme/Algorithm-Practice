// 120907 OX퀴즈
// 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return

// 1 ≤ quiz의 길이 ≤ 10
// -10,000 ≤ X, Y ≤ 10,000
// -20,000 ≤ Z ≤ 20,000
// [연산자]는 + 와 - 중 하나입니다.
function solution(quiz) {
  let answer = [];

  for (let i = 0; i < quiz.length; i++) {
    const line = quiz[i].split(" ");
    if (line[1] == "-") {
      const res = Number(line[0]) - Number(line[2]);
      if (res == Number(line[4])) answer.push("O");
      else answer.push("X");
    } else {
      const res = Number(line[0]) + Number(line[2]);
      if (res == Number(line[4])) answer.push("O");
      else answer.push("X");
    }
  }
  return answer;
}
