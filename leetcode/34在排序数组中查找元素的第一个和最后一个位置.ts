//二分查找的例题
function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];

  // 在一个升序数组nums中，查找第一个大于等于目标元素target的位置，闭区间写法
  // 等价于查找将target插入该数组中的位置，且数组中若存在与目标元素相同的重复元素，目标元素会插入在这些重复元素的最左边
  const findLeftBound = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    // 循环到后面，left和right一定会指向同一个元素，即left===mid===right，该元素有两种情况
    // 第一种情况，该元素比目标元素小，其实此时找到了插入位置的左边，最后一次循环会使得left+1，这时left便是插入位置
    // 第二种情况，该元素大于或等于目标元素，此时直接找到了插入位置，最后一次循环使得right-1打破循环，直接返回left便是插入位置
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // 若中点>=目标值，说明中点右侧（含中点）都大于目标值，收缩右区间
      if (nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };

  const left = findLeftBound(nums, target);
  if (nums[left] !== target) return [-1, -1];
  const right = findLeftBound(nums, target + 1);
  return [left, right - 1];
}
