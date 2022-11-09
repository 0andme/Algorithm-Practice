// 42747 H-Index
// 어떤 과학자가 발표한 논문 n편 중,
// h번 이상 인용된 논문이 h편 이상이고
// 나머지 논문이 h번 이하 인용되었다면
// h의 최댓값이 이 과학자의 H-Index입니다.
// 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return

// 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
// 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

// 0부터 인용의 맥스 수만큼...돌리기
// h번 이상 인용된 논문이 h편 이상이고
// 나머지 논문이 h번 이하 인용되었다면
// 기존의 h와i 중 큰 값이 h로 갱신

function solution(citations) {
  let answer = 0;

  for (let i = 1; i < Math.max(...citations); i++) {
    // i번 이상 인용된 논문 수
    const quote = citations.filter((num) => num >= i).length;
    // i번 이하 인용된 논문 수
    const unquote = citations.filter((num) => num <= i).length;

    if (quote >= i && unquote <= i) {
      // 조건 : 큰 값이 h로 갱신이지만
      // i가 순차적이므로 비교할 필요 없음
      answer = i;
    }
  }
  return answer;
}
