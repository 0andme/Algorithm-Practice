// 4195친구네트워크

const fs = require("fs");
const input = fs
  .readFileSync("./4195친구네트워크.txt")
  .toString()
  .trim()
  .split("\n");

const testN = input.shift();
let answer = "";
for (let i = 0; i < testN; i++) {
  let parent = {};
  let number = {};
  const lineN = input.shift();
  for (let j = 0; j < lineN; j++) {
    const [x, y] = input.shift().split(" ");
    if (!parent.hasOwnProperty(x)) {
      parent[x] = x;
      number[x] = 1;
    }
    if (!parent.hasOwnProperty(y)) {
      parent[y] = y;
      number[y] = 1;
    }
    union(x, y, parent, number);
    answer += number[find(x, parent)] + "\n";
  }
}
console.log(answer);
// 재귀함수로 x값이 부모노드를 찾아가는 함수
function find(x, parent) {
  // 부모가 나 자신이면 리턴 자신
  if (x == parent[x]) {
    return x;
  }
  //  부모를 찾아 갱신하고 부모를 리턴
  else {
    let p = find(parent[x], parent);
    parent[x] = p;
    return parent[x];
  }
}

// 두 노드를 합치는 함수
function union(x, y, parent, number) {
  x = find(x, parent);
  y = find(y, parent);
  // 두 노드의 부모 노드가 다르면
  //  y의 부모를 x의 부모로 변경하고
  // 사이즈 값을 합침
  // 이때 부모 쪽 넘버를 키움
  if (x != y) {
    parent[y] = x;
    number[x] += number[y];
  }
}

// 풀이법
// 해시와 union-find 알고리즘(합집합 찾기)을 이용
// dictionary 자료형 이용

// union-find 알고리즘

// - 원소들의 연결 여부를 확인하는 알고리즘
// 부모 배열을 만들어 놓고 재귀를 통해 연결된 최종부모를 배열에 집어넣음
