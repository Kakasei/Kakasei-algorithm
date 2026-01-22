// 看了题解，debug了好几次，老是写错变量
// 有序数组向左偏移后得到nums，显然nums由两个有序数组组成
// 今要在nums中查找给定元素，若能确定nums两个有序数组的分界点，则分别在两数组上二分查找即可
// nums中最小值即为分界点，查找偏移数组中最小值问题可参考153

function search(nums: number[], target: number): number {
    const i = findMinIndex(nums);

    const leftResult = binaryFind(nums, 0, i - 1, target);
    if (leftResult !== -1) {
        return leftResult;
    }
    const rightResult = binaryFind(nums, i, nums.length - 1, target);
    if (rightResult !== -1) {
        return rightResult;
    }
    return -1;
}

// 查找最小值索引
const findMinIndex = (nums: number[]) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            return left;
        }
    }

    return left;
};

const binaryFind = (
    nums: number[],
    left: number,
    right: number,
    target: number,
) => {
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
    return -1;
};
