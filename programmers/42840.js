function solution(answers) {
  const A = [1, 2, 3, 4, 5];
  const B = [2, 1, 2, 3, 2, 4, 2, 5];
  const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let answer = new Map([
    ["1", 0],
    ["2", 0],
    ["3", 0],
  ]);
  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i] === A[i % 5]) {
      answer.set("1", answer.get("1") + 1);
    }
    if (answers[i] === B[i % 8]) {
      answer.set("2", answer.get("2") + 1);
    }
    if (answers[i] === C[i % 10]) {
      answer.set("3", answer.get("3") + 1);
    }
  }

  const res = [...answer].sort((a, b) => a[1] - b[1]);
  const max = res[res.length - 1][1];
  return res.filter((data) => data[1] === max).map((data) => Number(data[0]));
}
