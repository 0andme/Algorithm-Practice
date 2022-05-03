function solution(numbers) {
  numbers.sort((a, b) => {
    let numA = Number(a.toString() + b.toString());
    let numB = Number(b.toString() + a.toString());
    return numB - numA;
  });
  let res = numbers.join("");
  // 아래 조건 없으면 통과 안됨
  if (res[0] === "0") return "0";
  else return res;
}
