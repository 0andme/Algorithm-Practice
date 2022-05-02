function solution(nums) {
  let setNums = new Set(nums);
  return Math.min(parseInt(nums.length / 2), setNums.size);
}
