// 120863 다항식 더하기
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
// 동류항끼리 더한 결괏값을 문자열로 return
// 같은 식이라면 가장 짧은 수식을 return

// polynomial에 변수는 'x'만 존재합니다.
// polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
// 012x + 001"처럼 0을 제외하고는 0으로 시작하는 수는 없습니다.
// 계수 1은 생략합니다.
function solution(polynomial) {
  let res = "";
  let answer = { x: 0, n: 0 };
  const datas = polynomial.split(" + ");
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].includes("x")) {
      if (datas[i] == "x") answer["x"] += 1;
      else {
        answer["x"] += Number(datas[i].slice(0, -1));
      }
    } else {
      answer["n"] += Number(datas[i]);
    }
  }
  if (answer["x"] > 0) {
    if (answer["x"] == 1) {
      res += "x";
    } else {
      res += answer["x"] + "x";
    }
  }
  if (answer["x"] > 0 && answer["n"] > 0) res += " + ";
  res += answer["n"] > 0 ? answer["n"] : "";

  return res;
}
