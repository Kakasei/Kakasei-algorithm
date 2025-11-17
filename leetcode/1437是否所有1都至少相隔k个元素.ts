function kLengthApart(nums: number[], k: number): boolean {
  let lastOneIndex = -Infinity;
  for (const i in nums) {
    if (nums[i]) {
      if (Number(i) - lastOneIndex - 1 < k) return false;
      lastOneIndex = Number(i);
    }
  }
  return true;
}
