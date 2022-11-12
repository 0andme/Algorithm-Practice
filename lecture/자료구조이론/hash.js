// 1.  메소드 예제
const mapVal = new Map();
const val = ["A", "B", "C", "D", "E"];
for (let i = 0; i < 10; i++) {
  if (mapVal.has(val[i % 5])) {
    mapVal.set(val[i % 5], mapVal.get(val[i % 5]) + 1);
  } else {
    mapVal.set(val[i % 5], 0);
  }
}
console.log(mapVal);

let dataMapVal2 = [
  ["A", 0],
  ["B", 0],
  ["C", 0],
  ["D", 0],
];

const mapVal2 = new Map();
const val2 = ["A", "B", "C", "D"];
for (let i = 0; i < 8; i += 1) {
  if (mapVal2.get(val2[i % 4])) {
    mapVal2.set(val2[i % 4], mapVal2.get(val2[i % 4]) + 1);
  } else {
    mapVal2.set(val2[i % 4], 0);
  }
}

console.log(mapVal2);
console.log(mapVal2.values());
console.log(mapVal2.keys());
console.log(mapVal2.entries());
