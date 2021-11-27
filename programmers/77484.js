// programmers
// https://programmers.co.kr/learn/courses/30/lessons/77484
const lottos = [45, 4, 35, 20, 3, 9];
const win_nums = [20, 9, 3, 45, 4, 35];
solution(lottos, win_nums);

function solution(lottos, win_nums) {
  var answer = [];
  var cnt = 0;
  var zeroNum = 0;
  lottos.forEach((data) => {
    if (data === 0) {
      zeroNum += 1;
      return;
    }
    win_nums.find((win) => {
      if (win === data) {
        cnt += 1;
      }
    });
  });

  switch (cnt + zeroNum) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }
  switch (cnt) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }
  // answer.push(cnt+zeroNum);
  // answer.push(cnt);

  return answer;
}
