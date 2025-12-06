// 简单题，直接按题意模拟即可
function countPartitions(nums: number[]): number {
    const n = nums.length;
    const s = new Array(n + 1);
    s[0] = 0;
    for (let i = 1; i <= n; i++) {
        s[i] = s[i - 1] + nums[i - 1];
    }
    let result = 0;

    for (let i = 1; i < n; i++) {
        if ((s[i] - (s[n] - s[i])) % 2 === 0) {
            result++;
        }
    }

    return result;
}
