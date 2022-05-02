function solution(price, money, count) {
  let res = (price * count * (count + 1)) / 2 - money;

  return res > 0 ? res : 0;
}
