function solution(clothes) {
  let answer = 0;
  let map = new Map();
  // 의상 종류 개수 저장
  clothes.forEach((clo) => {
    if (map.get(clo[1])) {
      map.set(clo[1], map.get(clo[1]) + 1);
    } else {
      map.set(clo[1], 1);
    }
  });
  //배열로 변환
  map = [...map];
  // 의상 종류끼리 곱셈 // 의상 총 종류 덧셈
  if (map.length > 1) {
    // 1개씩 입기 + 2개씩 입기 + ...n개씩 입기 공식
    // (a종류개수+1)*(b종류개수+1)*(n종류개수+1)-1
    answer = map.reduce((a, b) => (a *= b[1] + 1), 1) - 1;
  } else {
    answer = map[0][1];
  }
  return answer;
}
