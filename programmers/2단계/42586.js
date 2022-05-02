function solution(progresses, speeds) {
  let answer = [];

  const needDays = progresses.map((num, i) => {
    return Math.ceil((100 - num) / speeds[i]);
  });
  let cnt = 0;
  let i = 0;
  let buildNum = 0;
  while (i < needDays.length) {
    let num = needDays[buildNum];
    if (needDays[i + 1] <= num) {
      cnt += 1;
      i += 1;
    } else {
      answer.push(cnt + 1);
      buildNum = i + 1;
      i += 1;
      cnt = 0;
    }
  }
  return answer;
}
