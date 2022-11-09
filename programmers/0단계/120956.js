// 120956 옹알이 (1)
// "aya", "ye", "woo", "ma"
// 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음 밖에 하지 못합니다
// babbling이 매개변수로 주어질 때
// 발음할 수 있는 단어의 개수를 return

// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 15
// babbling의 원소에서 "aya", "ye", "woo", "ma"는
// 각각 최대 한 번씩만 등장합니다

// 4개 문자열이 포함되어 있는지 확인해서 해당 문자열 길이만큼 카운트
// 4번 확인후 카운트랑 원문자열 길이 동일하면 리턴값 ++
const strArr = ["aya", "ye", "woo", "ma"];
function solution(babbling) {
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    let count = 0;
    for (let j = 0; j < 4; j++) {
      if (babbling[i].includes(strArr[j])) {
        count += strArr[j].length++;
      }
    }
    if (babbling[i].length == count) answer++;
  }
  return answer;
}
