// 42578 위장
// 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return

// 제한사항

// clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
// 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
// 같은 이름을 가진 의상은 존재하지 않습니다.
// clothes의 모든 원소는 문자열로 이루어져 있습니다.
// 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
// 스파이는 하루에 최소 한 개의 의상은 입습니다.

// 풀이 1
// 수학적 풀이
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
    answer = map.reduce((a, b) => (a *= b[1] + 1), 1) - 1;
  } else {
    answer = map[0][1];
  }
  return answer;
}

// 솔루션 2
// object 사용

function solution(clothes) {
  let answer = 0;
  let closet = {};

  for (let i = 0; i < clothes.length; i++) {
    closet[clothes[i][1]] = closet[clothes[i][1]]
      ? (closet[clothes[i][1]] += 1)
      : 1;
  }

  answer = Object.values(closet).reduce((a, b) => (a *= b + 1), 1) - 1;
  return answer;
}
