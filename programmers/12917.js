function solution(str) {
  return str.split("").sort().reverse().join("");
}

// 방법 2
function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join("");
}
