// 120895 인덱스 바꾸기
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return
function solution(my_string, num1, num2) {
  let answer = "";
  let strArr = my_string.split("");
  let temp = strArr[num1];
  strArr[num1] = strArr[num2];
  strArr[num2] = temp;

  // [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  answer = strArr.join("");
  return answer;
}
