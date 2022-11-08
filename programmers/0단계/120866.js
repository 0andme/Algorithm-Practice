// 120866 안전지대
// board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재
// 1 주변 8칸은  전부 위험 지역으로 취급
// board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return

// 제한사항
// board는 n * n 배열입니다.
// 1 ≤ n ≤ 100
// 지뢰는 1로 표시되어 있습니다.
// board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재
// 입력예
// [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0],
// ];

function solution(board) {
  let answer = 0;
  const N = board[0].length;
  let checkBoard = JSON.parse(JSON.stringify(board));
  const dx = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
  const dy = [-1, -1, -1, 0, 0, 0, 1, 1, 1];

  // 모든 배열 훑으며 새로운 배열의  주변 8칸 값 1로 갱신
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] == 1) {
        for (let k = 0; k < 9; k++) {
          const nx = i + dy[k];
          const ny = j + dx[k];
          // 값이 유효한지 판단
          if (nx < 0 || ny < 0 || nx > N - 1 || ny > N - 1) continue;
          else {
            checkBoard[nx][ny] = 1;
          }
        }
      }
    }
  }
  console.log(checkBoard);
  let count = 0;
  // 모든 배열 돌며 1이 아닌 수만큼 카운트
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (checkBoard[i][j] == 1) {
        count++;
      }
    }
  }
  answer = N * N - count;
  return answer;
}
