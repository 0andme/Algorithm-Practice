function solution(n) {
  let n3 = "";
  while (n > 0) {
    n3 += n % 3;
    n = parseInt(n / 3);
  }
  let res = 0;
  for (let i = 0; i < n3.length; i += 1) {
    res += 3 ** (n3.length - i - 1) * n3[i];
  }
  return res;
}

// 방법 2

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
