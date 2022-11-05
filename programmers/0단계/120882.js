// 120882 등수 매기기
// 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
// 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return

// 0 ≤ score[0], score[1] ≤ 100
// 1 ≤ score의 길이 ≤ 10
// score의 원소 길이는 2입니다.
// score는 중복된 원소를 갖지 않습니다.

// score길이 1이면 [1]리턴
// 각 점수를 이용하여  map으로 평균내기
// sort하고 각 인덱스만 뽑기
function solution(score) {
  let answer = [];

  let avgArr = score.map((data) => (data[0] + data[1]) / 2);
  let sorted = [...avgArr].sort((a, b) => b - a);
  answer = avgArr.map((avg) => sorted.indexOf(avg) + 1);
  return answer;
}
