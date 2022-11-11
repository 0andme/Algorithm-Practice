// 12906 같은 숫자는 싫어
// 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return

// 배열 arr의 크기 : 1,000,000 이하의 자연수

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}
