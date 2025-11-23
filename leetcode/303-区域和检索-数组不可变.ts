// 前缀和的模板题，需要牢牢掌握前缀和的概念和写法
class NumArray {
    private s: number[] = [];
    constructor(nums: number[]) {
        this.s[0] = 0;
        for (let i = 0; i < nums.length; i++) {
            this.s[i + 1] = this.s[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.s[right + 1] - this.s[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
