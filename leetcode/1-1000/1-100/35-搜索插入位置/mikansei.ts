function searchInsert(nums: number[], target: number): number {
    let left = 0,
        right = nums.length;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return left;
}
