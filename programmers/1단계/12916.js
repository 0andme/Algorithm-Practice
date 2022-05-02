function solution(str) {
  let Pnum = 0;
  let Ynum = 0;
  str.split("").forEach((char) => {
    if (char === "p" || char === "P") {
      Pnum += 1;
    } else if (char === "y" || char === "Y") {
      Ynum += 1;
    }
  });
  if (Ynum + Pnum) {
    if (Ynum === Pnum) return true;
    else return false;
  } else {
    return true;
  }
}

// 방법 2
function solution(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
