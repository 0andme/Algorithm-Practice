// 120862 최댓값 만들기 (2)
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return
function solution(numbers) {
  let answer = 0;
  if (numbers.length == 2) {
    answer = numbers.reduce((a, b) => a * b, 1);
    return answer;
  }
  const plusArr = numbers.filter((a) => a >= 0).sort((a, b) => b - a);
  const miusArr = numbers.filter((a) => a < 0).sort((a, b) => a - b);

  const res1 = plusArr.length > 1 ? plusArr[0] * plusArr[1] : 0;
  const res2 = miusArr.length > 1 ? miusArr[0] * miusArr[1] : 0;

  answer = Math.max(res1, res2);
  return answer;
}
