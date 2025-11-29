// 动态规划基础题，需要反复揣摩
// TODO反复揣摩
function rob(nums: number[]): number {
    const f = new Array(nums.length);
    f[0] = nums[0];
    f[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        f[i] = Math.max(f[i - 2] + nums[i], f[i - 1]);
    }
    return f[nums.length - 1];
}
