// 120861 캐릭터의 좌표
// 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다.
// 캐릭터는 항상 [0,0]에서 시작할 때
// 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return

// board의 크기를 벗어난 방향키 입력은 무시
// up, down, left, right

// 보드의 (길이-1)/2 만큼까지만 각 방향으로 이동할 수 있음

const key = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};
function solution(keyinput, board) {
  let answer = [0, 0];
  const max = board.map((a) => parseInt((a - 1) / 2));
  for (let i = 0; i < keyinput.length; i++) {
    answer = answer.map((xy, k) => {
      const exp = xy + key[keyinput[i]][k];
      if (Math.abs(exp) > max[k]) return xy;
      else return exp;
    });
  }
  return answer;
}

// 테스트 케이스 8번
// 반례: ["left", "left", "left", "right"], [3, 3];
// 기대값: [0, 0];

// 혹은;

// 반례: ["up", "up", "up", "down"], [3, 3];
// 기대값: [0, 0];
