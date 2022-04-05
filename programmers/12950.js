function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i += 1) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j += 1) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

//방법 2

function solution(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
