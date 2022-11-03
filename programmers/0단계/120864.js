// 120864 숨어있는 숫자의 덧셈 (2)

// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return

// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ my_string 안의 자연수 ≤ 1000
// 000123과 같이 0이 선행하는 경우는 없음
// 자연수가 없는 경우 0을 return

// 정규표현식으로 숫자만 match
// 해당 배열 비어있으면 return 0
// reduce사용

function solution(my_string) {
  const datas = my_string.match(/[\d]+/g);
  if (!datas) return 0;
  else return datas.reduce((a, b) => Number(a) + Number(b), 0);
}
