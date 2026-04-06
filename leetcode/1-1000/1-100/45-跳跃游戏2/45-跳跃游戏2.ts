// 最笨的dp法，时间复杂度是O(n^2)

function jump(nums: number[]): number {
    const n = nums.length;
    const dp = new Array(n);
    dp[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        let min = Infinity;
        for (let j = i + nums[i]; j > i; j--) {
            min = Math.min(min, (dp[j] ?? Infinity) + 1);
        }
        dp[i] = min;
        console.log(dp[i]);
    }
    return dp[0];
}
