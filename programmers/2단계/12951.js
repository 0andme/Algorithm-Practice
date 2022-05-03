function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) => {
      // word가 빈 문자열인 경우를 커버하기 위해선 charAt을 써야함
      // 인덱스로 접근 불가
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
