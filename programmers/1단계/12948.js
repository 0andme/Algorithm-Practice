function solution(phone_number) {
  const last4Num = phone_number.slice(-4);
  const n = phone_number.length;
  let answer = "";
  for (let i = 0; i < n - 4; i += 1) {
    answer += "*";
  }
  answer += last4Num;
  return answer;
}

// 방법 2
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}
