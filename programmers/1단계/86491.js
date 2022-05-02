function solution(sizes) {
  for (card of sizes) {
    if (card[0] < card[1]) {
      let temp = card[0];
      card[0] = card[1];
      card[1] = temp;
    }
  }
  let maxW = 0;
  let maxH = 0;
  sizes.forEach((card) => {
    maxW = Math.max(maxW, card[0]);
    maxH = Math.max(maxH, card[1]);
  });
  return maxW * maxH;
}
