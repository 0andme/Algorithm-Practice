// 42576 완주하지 못한 선수
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주
// 참여한 선수들의 이름이 담긴 배열 participant
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때
// 완주하지 못한 선수의 이름을 return

// 경기에 참여한 선수의 수는 1명 이상 100,000명 이하
// 동명이인이 있을 수 있습니다

function solution(participant, completion) {
  let i = 0;
  let answer = "";
  while (participant.length > 1) {
    const index = completion.indexOf(participant[i]);
    if (index == -1) {
      answer = participant[i];
      break;
    }
    if (index > -1) {
      participant.splice(i, 1);
      completion.splice(index, 1);
    }
  }
  answer = answer == "" ? answer : participant[0];
  return answer;
}

// for 문 사용
function solution(participant, completion) {
  let i = 0;
  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    const index = completion.indexOf(participant[i]);
    if (index == -1) {
      answer = participant[i];
      break;
    } else {
      completion.splice(index, 1);
    }
  }

  return answer;
}

// 위의 두문제는 효율성 테스트 실패 = 시간복잡도 n제곱이라서.
// 인덱스 오브의 시간 복잡도가 n이기 때문

// 솔루션 3
// 시간복잡도가 n
function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i += 1) {
    if (completion[i] != participant[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
