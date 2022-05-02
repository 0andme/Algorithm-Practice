function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i += 1) {
    //i의 약수 개수 구하기
    let num = 0;
    for (let j = 1; j <= i; j += 1) {
      if (i % j === 0) {
        num += 1;
      }
    }
    if (num % 2 === 0) sum += i;
    else sum -= i;
  }
  return sum;
}
