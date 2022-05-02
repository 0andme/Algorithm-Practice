function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (b[n] > a[n]) return -1;
    else {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
  });
}

// 방법 2
// 먼저 사전순으로 정렬하고 index로 정렬
function solution(strings, n) {
  return strings.sort().sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (b[n] > a[n]) return -1;
    else {
      return 0;
    }
  });
}
