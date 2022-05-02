function solution(arr) {
  let res = [];
  if (arr.length === 1) {
    res = [-1];
  } else {
    // 작은 수 찾기
    // 방법 1 .reduce이용
    let min = arr.reduce((a, b) => Math.min(a, b));
    // 방법 2 전개연산자 이용
    // let min=Math.min(...arr);

    let minIndex = arr.indexOf(min);
    for (let i = 0; i < arr.length; i += 1) {
      if (i === minIndex) {
        continue;
      }
      res.push(arr[i]);
    }
  }
  return res;
}

// 방법 2
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
