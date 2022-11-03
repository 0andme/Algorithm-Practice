// 120869 외계어 사전
// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1,
// 존재하지 않는다면 2를 return

// dic개수만큼 for
// spell 길이 만큼 for
// count 값이 spell길이랑 동일하면 return 1

function solution(spell, dic) {
  let answer = 2;
  for (let i = 0; i < dic.length; i++) {
    let count = 0;
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].includes(spell[j])) {
        count++;
      }
    }
    if (count == spell.length) {
      answer = 1;
      return answers;
    }
  }
  return answer;
}
