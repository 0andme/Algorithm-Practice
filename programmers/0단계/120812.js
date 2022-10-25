// 120812 최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return
// 최빈값이 여러 개면 -1을 return

function solution(array) {
  let answer = 0;
  let cntList = {};
  // 오브젝트를 이용
  // 키 : 값 형태로 저장
  // 숫자 : 숫자의 출현 빈도
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (cntList[num]) {
      cntList[num] = cntList[num] + 1;
    } else {
      cntList[num] = 1;
    }
  }

  const values = Object.values(cntList);
  const max = Math.max(...values);
  let cnt = 0;
  // 숫자 출현 빈도에서 가장 큰 값을 찾고
  // 해당 값이 여러번 나오는지 cnt변수에 저장
  // cnt변수의 값이 2면 출력값은 -1 -> for문 탈출
  // 혹은 nt변수의 값이 2이상이 되면 출력값은 -1
  // cnt변수의 값이 1개면
  // 해당 인덱스 번째 키 값이 출력값
  for (let i = 0; i < values.length; i++) {
    if (values[i] == max) {
      cnt++;
      if (cnt == 2) {
        answer = -1;
        break;
      } else {
        answer = Number(Object.keys(cntList)[i]);
      }
    }
  }

  return answer;
}
