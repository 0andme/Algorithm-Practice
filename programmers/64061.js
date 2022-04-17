function solution(board, moves) {
  let answer = 0;
  let res = [];
  moves.forEach((lineNum) => {
    let getNum = 0;

    for (let j = 0; j < board.length; j += 1) {
      if (board[j][lineNum - 1]) {
        getNum = board[j][lineNum - 1];
        board[j][lineNum - 1] = 0;
        break;
      }
    }
    if (getNum) {
      if (getNum === res[res.length - 1]) {
        answer += 2;
        res.splice(-1);
      } else res.push(getNum);
    }
  });
  return answer;
}
