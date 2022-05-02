function solution(s) {
  if (s[0] === "+" || s[0] === "-") {
    return s[0] === "+" ? Number(s.slice(1)) : 0 - Number(s.slice(1));
  } else {
    return Number(s);
  }
}

// 방법 2
function solution(s) {
  return s / 1;
}
// 방법 3
function solution(s) {
  return +s;
}
// 방법4
function solution(s) {
  return Number(s);
}
