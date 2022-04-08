function solution(arr) {
  let res = [];
  arr.forEach((num, i) => {
    if (num != arr[i - 1]) {
      res.push(num);
    }
  });
  return res;
}
// 방법 2
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
