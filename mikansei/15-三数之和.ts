// 167-两数之和II的进阶，核心仍然是利用首尾相向双指针，在有序数组中寻找两数之和
// 看了题解
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < nums.length - 2; i++) {
        const a = nums[i];
        if (a === nums[i - 1]) {
            continue;
        }
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] > -a) {
                do {
                    right--;
                } while (nums[right] === nums[right + 1]);
            } else if (nums[left] + nums[right] < -a) {
                do {
                    left++;
                } while (nums[left] === nums[left - 1]);
            } else {
                result.push([a, nums[left], nums[right]]);
                do {
                    right--;
                } while (nums[right] === nums[right + 1]);
                do {
                    left++;
                } while (nums[left] === nums[left - 1]);
            }
        }
    }
    return result;
}
