function solution(n, lost, reserve) {
  let noneed = n - [...new Set(lost.concat(reserve))].length;

  lost.sort();
  reserve.sort();
  let need = 0;
  for (num of [...lost]) {
    if (reserve.find((data) => data === num)) {
      reserve.splice(reserve.indexOf(num), 1);
      lost.splice(lost.indexOf(num), 1);
      need += 1;
    }
  }
  noneed += reserve.length;

  for (num of reserve) {
    let lostNum = lost.find((lostNum) => Math.abs(num - lostNum) === 1);
    if (lostNum) {
      need += 1;
      lost.splice(lost.indexOf(lostNum), 1);
    }
  }
  return need + noneed;
}
