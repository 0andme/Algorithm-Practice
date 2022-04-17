function solution(numbers, hand) {
  var answer = "";
  let lnum = 10;
  let rnum = 12;

  numbers.forEach((num) => {
    if (num === 0) num = 11;
    if (0 === num % 3) {
      answer += "R";
      rnum = num;
    } else if (1 === num % 3) {
      answer += "L";
      lnum = num;
    } else {
      let dl = parseInt(Math.abs(lnum - num) / 3 + (Math.abs(lnum - num) % 3));
      let dr = parseInt(Math.abs(rnum - num) / 3 + (Math.abs(rnum - num) % 3));
      if (dl > dr) {
        answer += "R";
        rnum = num;
      } else if (dl < dr) {
        answer += "L";
        lnum = num;
      } else {
        if (hand === "right") {
          answer += "R";
          rnum = num;
        } else {
          answer += "L";
          lnum = num;
        }
      }
    }
  });
  return answer;
}
