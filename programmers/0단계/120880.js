// 120880 특이한 정렬

// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때
// numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return

// numlist는 중복된 원소를 갖지 않습니다.

function solution(numlist, n) {
  let answer = [...numlist];
  answer.sort((a, b) => {
    // 거리비교
    const dist = [Math.abs(a - n), Math.abs(b - n)];
    // 거리 같으면 더큰 수가 앞
    if (dist[0] == dist[1]) {
      return b - a;
    }
    //  거리 작은쪽이  앞
    else {
      return dist[0] - dist[1];
    }
  });
  return answer;
}
