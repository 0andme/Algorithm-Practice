function solution(numbers) {
  let res = new Set();
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      res.add(numbers[i] + numbers[j]);
    }
  }
  return [...res].sort((a, b) => a - b);
}
