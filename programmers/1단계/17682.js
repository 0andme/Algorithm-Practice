function solution(res) {
  let arr = res.split("");
  let index = -1;
  // 각 단계의 점수를 저장할 배열
  let score = new Array(3).fill(0);
  for (let i = 0; i < arr.length; i += 1) {
    //숫자 넣기
    if (arr[i] >= "0" && arr[i] <= "9") {
      index += 1;
      // 10 찾기
      if (arr[i + 1] === "0") {
        score[index] = 10;
        i += 1;
      } else {
        score[index] = Number(arr[i]);
      }
    }
    //SDT확인
    if (arr[i] === "S" || arr[i] === "D" || arr[i] === "T") {
      if (arr[i] === "S") {
        score[index] = score[index];
      } else if (arr[i] === "D") {
        score[index] = score[index] ** 2;
      } else if (arr[i] === "T") {
        score[index] = score[index] ** 3;
      }
    }
    //
    if (arr[i] === "*" || arr[i] === "#") {
      if (arr[i] === "*") {
        for (let j = index - 1; j <= index; j += 1) {
          score[j] = score[j] * 2;
        }
      } else {
        score[index] = -score[index];
      }
    }
  }

  return score.reduce((a, b) => a + b);
}
