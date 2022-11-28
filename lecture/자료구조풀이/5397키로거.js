// 5397 키로거

// 백스페이스 입력 -
// 화살표입력은 < >

const fs = require("fs");
const input = fs.readFileSync("./5397키로거.txt").toString().trim().split("\n");

const N = input.shift();
const data = input;
const answer = [];
for (let i = 0; i < N; i++) {
  const testData = data[i];

  answer.push(sol1(testData));
}
console.log(answer.join("\n"));

// 풀이법 1
// 백과 프론트배열을 따로 둔다.
// 커서가 앞으로 이동 = 프론트 마지막을pop 백앞에 붙이기unshift
// 커서가 뒤로 이동 = 백 앞부분을shift 프론트 뒤에 붙이기push

// O(n) splice, shift, unshift
// O(1) pop, push

function sol1(testData) {
  let front = [];
  let back = [];

  for (let i = 0; i < testData.length; i++) {
    if (testData[i] == "-") {
      front.length == 0 || front.pop();
    } else if (testData[i] == ">") {
      back.length == 0 || front.push(back.pop());
    } else if (testData[i] == "<") {
      front.length == 0 || back.push(front.pop());
    } else {
      front.push(testData[i]);
    }
  }
  return front.join("") + back.reverse().join("");
}

// 풀이법 2
//  splice는 n의 복잡도를 가짐 -> 시간 초과
function sol2(testData) {
  let answer = [];
  let cursor = 0;
  for (let i = 0; i < testData.length; i++) {
    if (testData[i] == "-") {
      cursor--;
      answer.splice(cursor, 1);
    } else if (testData[i] == "<") {
      cursor--;
      if (cursor < 0) cursor = 0;
    } else if (testData[i] == ">") {
      cursor++;
      if (cursor > answer.length) cursor = answer.length;
    } else {
      answer.splice(cursor, 0, testData[i]);
      cursor++;
    }
  }
  return answer.join("");
}
