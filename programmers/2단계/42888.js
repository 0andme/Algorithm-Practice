function solution(record) {
  let answer = [];
  let recordList = record.map((msg) => msg.split(" "));
  let userNameList = new Map();
  //유저 아이디별 이름 변경
  for (let i = 0; i < recordList.length; i++) {
    if ("Leave" === recordList[i][0]) {
      continue;
    }
    let userId = recordList[i][1];
    let userName = recordList[i][2];
    userNameList.set(userId, userName);
  }
  // 출력문 수정
  for (let i = 0; i < recordList.length; i++) {
    let move = recordList[i][0];
    let userId = recordList[i][1];
    if ("Enter" === move) {
      answer.push(`${userNameList.get(userId)}님이 들어왔습니다.`);
    } else if ("Leave" === move) {
      answer.push(`${userNameList.get(userId)}님이 나갔습니다.`);
    }
  }
  return answer;
}
