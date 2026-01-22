// 完全背包基础题
function numSquares(n: number): number {
    // 需要用的最大的底数，相当于物品的种类
    const m = Math.floor(Math.sqrt(n));
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
    }
    for (let i = 1; i <= n; i++) {
        dp[1][i] = i;
    }
    for (let i = 1; i <= m; i++) {
        dp[i][0] = 0;
    }

    for (let i = 2; i <= m; i++) {
        for (let target = 1; target <= n; target++) {
            dp[i][target] = Math.min(
                dp[i - 1][target],
                target - i * i >= 0 ? dp[i][target - i * i] + 1 : Infinity,
            );
        }
    }

    return dp[m][n];
}
