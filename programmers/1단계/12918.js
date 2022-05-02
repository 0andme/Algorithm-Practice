//방법 1

function solution(str) {
  let pattern = /^\d{6}$|^\d{4}$/;
  return pattern.test(s);
}

// 방법 2
function solution(str) {
  let pattern = /^[0-9]+$/;
  if (str.length === 4 || str.length === 6) {
    return pattern.test(str);
  } else return false;
}
