// 12909 올바른 괄호
// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때,
// 문자열 s가 올바른 괄호이면 true를 return 하고,
// 올바르지 않은 괄호이면 false를 return

function solution(s) {
  let arr = [s[0]];
  for (let i = 1; i < s.length; i += 1) {
    if (arr[arr.length - 1] + s[i] === "()") {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.length != 0 ? false : true;
}

// 위 아래 동일 코드
function solution(s) {
  let arr = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (arr[arr.length - 1] + s[i] == "()") arr.pop();
    else arr.push(s[i]);
  }
  return arr.length > 0 ? false : true;
}
