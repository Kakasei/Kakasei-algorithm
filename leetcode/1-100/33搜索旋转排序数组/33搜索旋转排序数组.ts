// 我自己想出来的解法，可以通过，但是最坏情况下时间复杂度为O(n)，本质上还是暴力法

function search(nums: number[], target: number): number {
    return find(nums, target, 0, nums.length - 1);
}

const find = (
    nums: number[],
    target: number,
    left: number,
    right: number,
): number => {
    // 若子数组长度为1，则检查其是否为target
    if (nums[left] === nums[right]) {
        if (nums[left] === target) {
            return left;
        } else {
            return -1;
        }
    }
    // 若子数组有序，则实施二分查找
    if (nums[left] < nums[right]) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    } //若子数组无序，则将其二分，在两个子数组上递归查找
    else {
        const mid = Math.floor((left + right) / 2);

        const leftResult = find(nums, target, left, mid);
        if (leftResult !== -1) return leftResult;
        const rightResult = find(nums, target, mid+1, right);
        if (rightResult !== -1) return rightResult;

        return -1;
    }
};
