function solution(arr, divisor) {
  let res = [];
  arr.forEach((num) => {
    if (num % divisor === 0) res.push(num);
  });
  if (!res.length) return [-1];
  else return res.sort((a, b) => a - b);
}
