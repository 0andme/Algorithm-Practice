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
