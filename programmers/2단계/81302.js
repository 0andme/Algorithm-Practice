function solution(places) {
  let answer = [];

  for (let i = 0; i < 5; i++) {
    answer.push(checkFunc(places[i]));
  }
  return answer;
}

function checkFunc(room) {
  let isGood = 1;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      //p가 아니면 패스
      if (room[i][j] != "P") {
        continue;
      }
      // -> 자리 확인
      if (j < 4) {
        if (room[i][j + 1] === "P") {
          return 0;
        }
      }
      // 한 자리 아래 확인
      if (i < 4) {
        if (room[i + 1][j] === "P") {
          return 0;
        }
      }
      // ->-> 자리 확인
      if (j < 3) {
        if (room[i][j + 2] === "P") {
          if (room[i][j + 1] != "X") {
            return 0;
          }
        }
      }
      // 두자리 아래 확인
      if (i < 3) {
        if (room[i + 2][j] === "P") {
          if (room[i + 1][j] != "X") {
            return 0;
          }
        }
      }
      // 오른쪽 아래 대각선 자리 확인
      if (i < 4 && j < 4) {
        if (room[i + 1][j + 1] === "P") {
          if (room[i][j + 1] != "X" || room[i + 1][j] != "X") {
            return 0;
          }
        }
      }
      // 왼쪽 아래 대각선 자리 확인
      if (0 < j && i < 4) {
        if (room[i + 1][j - 1] === "P") {
          if (room[i][j - 1] != "X" || room[i + 1][j] != "X") {
            return 0;
          }
        }
      }
    }
  }
  return isGood;
}
