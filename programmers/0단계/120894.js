// 120894 영어가 싫어요
// 문자열 numbers가 매개변수로 주어질 때,
// numbers를 정수로 바꿔 return

function solution(numbers) {
  const numArr = numbers.match(
    /zero|one|two|three|four|five|six|seven|eight|nine/g
  );
  const answer = numArr.reduce((a, b) => (a += obj[b]), "");
  return Number(answer);
}
const obj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
