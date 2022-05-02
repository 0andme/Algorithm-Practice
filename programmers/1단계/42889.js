function solution(N, stages) {
  let rateArr = [];
  let failUserNum = 0;
  let stageUserNum = stages.length;
  for (let i = 1; i <= N; i += 1) {
    stageUserNum -= failUserNum;
    failUserNum = stages.filter((num) => num === i).length;
    let failRate = failUserNum / stageUserNum;
    rateArr.push({ index: i, failRate: failRate });
  }
  rateArr.sort((a, b) => b.failRate - a.failRate);
  return rateArr.map((data) => data.index);
}
