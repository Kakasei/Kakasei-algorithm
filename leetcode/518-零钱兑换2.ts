// 完全背包基础题
function change(amount: number, coins: number[]): number {
    const n = coins.length;
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(amount + 1);
    }
    for (let i = 0; i <= amount; i++) {
        if (i % coins[0] === 0) {
            dp[0][i] = 1;
        } else {
            dp[0][i] = 0;
        }
    }
    for (let i = 1; i < n; i++) {
        for (let target = 0; target <= amount; target++) {
            dp[i][target] =
                dp[i - 1][target] +
                (target - coins[i] >= 0 ? dp[i][target - coins[i]] : 0);
        }
    }

    return dp[n - 1][amount];
}
