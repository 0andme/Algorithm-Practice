function solution(nums) {
  let sets = [];
  for (let i = 0; i <= nums.length - 3; i += 1) {
    for (let j = i + 1; j <= nums.length - 2; j += 1) {
      for (let k = j + 1; k <= nums.length - 1; k += 1) {
        sets.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  let res = new Array(sets.length).fill(true);
  for (let i = 0; i < sets.length; i += 1) {
    for (let j = 2; j <= Math.sqrt(sets[i]); j += 1) {
      if (sets[i] % j === 0) res[i] = false;
    }
  }
  return res.filter((data) => data === true).length;
}
