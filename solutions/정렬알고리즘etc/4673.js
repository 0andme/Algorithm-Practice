// 문제
// 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 입력
// 입력은 없다.
// 출력
// 10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.
let datalist = new Array(10000).fill(false);
let index = 1;
// 계산되어 나온 값을 true로 변경
while (1) {
  const res = func(index);
  datalist[res - 1] = true;
  index += 1;
  if (index > 10001) {
    break;
  }
}
index = 1;
// fasle인 값만 출력
while (1) {
  if (datalist[index - 1] === false) {
    console.log(index);
  }
  index += 1;
  if (index > 10001) {
    break;
  }
}
// 들어온 값의 각 자리를 더한 수를 리턴하는 함수
function func(index) {
  const num = String(index);
  let res = index;
  for (let i = 0; i < num.length; i++) {
    res += Number(num[i]);
  }
  return res;
}
