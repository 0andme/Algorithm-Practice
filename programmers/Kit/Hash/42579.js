// 42579 베스트앨범
// 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.
// 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

// 제한사항
// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
// 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return

// data={
//   클래식:[{고유번호:1,재생수:}],
// 팝:[{고유번호,재생수:}]}

function solution(genres, plays) {
  let answer = [];
  let data = {};
  let total = {};
  // 장르별 데이터 저장
  for (let i = 0; i < genres.length; i++) {
    data[genres[i]]
      ? data[genres[i]].push({ 고유번호: i, 재생수: plays[i] })
      : (data[genres[i]] = [{ 고유번호: i, 재생수: plays[i] }]);
  }
  const type = Object.keys(data);
  // 장르별 데이터를 재생수 기준으로 정렬
  for (let i = 0; i < type.length; i++) {
    data[type[i]].sort((a, b) => b["재생수"] - a["재생수"]);
  }
  // 장르별 총 재생수 저장
  for (let i = 0; i < plays.length; i++) {
    total[genres[i]]
      ? (total[genres[i]] += plays[i])
      : (total[genres[i]] = plays[i]);
  }
  // 장르목록을 총 재생수 기준으로  정렬
  const typeMax = Object.keys(total).sort((a, b) => total[b] - total[a]);

  for (let i = 0; i < typeMax.length; i++) {
    const type = typeMax[i];
    const lists = data[type]; //[ {},{}]
    for (let j = 0; j < Math.min(2, lists.length); j++) {
      answer.push(lists[j]["고유번호"]);
    }
  }
  return answer;
}
