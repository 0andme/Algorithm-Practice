// 11652 카드
const fs = require("fs");
const input = fs.readFileSync("./11652.txt").toString().trim().split("\n");

// 첫번째 줄은 카드의 개수
// 두번 째 줄은 카드에 적힌 정수
// 가장 많이 가지고 있는 정수를 출력.
// 여러 개라면 작은 것을 출력

// BigInt를 사용해야함
// - 빅인트값 끼리의 max min구하기 안됨
// - 빅인트 값 끼리의 소트시 결과값또한 빅인트 값이니까 소트 리턴 값이 1.0.-1이 제대로 나오지 못함.
// - 직접 return 1-1 0 해주자
const N = input[0];
const nums = input.slice(1).map(BigInt);

const obj = new Object();

// 정수와 개수를 키-값으로 저장
for (let i = 0; i < N; i++) {
  if (obj.hasOwnProperty(nums[i])) {
    obj[nums[i]] += 1;
  } else {
    obj[nums[i]] = 1;
  }
}

// 가장 큰 값을 찾기
const max = Math.max(...Object.values(obj));
// 그 큰 값을 가진 키값만 모으기
const filter = Object.keys(obj)
  .filter((key) => obj[key] == max)
  .sort((a, b) => (BigInt(a) < BigInt(b) ? -1 : BigInt(a) > BigInt(b) ? 1 : 0));
// 그 값 중에 가장 작은 값 출력
console.log(filter[0]);
