// 42748 K번째수
// array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때,
// k번째에 있는 수를 구하려 합니다.

// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return

// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
function solution(array, commands) {
  let answer = [];

  for (let n = 0; n < commands.length; n++) {
    const [i, j, k] = commands[n];
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return answer;
}
