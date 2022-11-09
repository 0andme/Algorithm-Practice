// 42746 가장 큰 수
// 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
// 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return

// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

// numbers의 값이 1000 이므로 숫자의 각자리수를 비교하기 어려움
// 1. 정렬시  ab ba중 더 큰 값이 되는 쪽으로 정렬
// 2. 리턴 배열 조인

function solution(numbers) {
  let answer = "";
  answer = [...numbers]
    .map(String)
    .sort((a, b) => {
      const [numA, numB] = [Number(a + b), Number(b + a)];
      return numB - numA;
    })
    .join("");
  return BigInt(answer).toString();
}

// 위의 코드로 에러 난 이유
// = 리턴시 Number로 바꾸면서 값이 달리짐 -> BigInt로 해결

// 테스트 케이스 추가
// 케이스 : 1~6
// 아래 케이스 통과
// [232,23] : 23/232 : (23232)
// [212,21] : 212/21 : (21221)
// [70,0,0,0,0] : 70/0/0/0/0 : (700000)
// 케이스 : 11
// 아래 케이스 통과
// [0,0,0,0] : (0)
