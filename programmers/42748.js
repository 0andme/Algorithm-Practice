function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i += 1) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return answer;
}
