// 二维状态数组dp[i][target]表示在[0,i]的硬币中挑选，凑齐target使用的最小硬币数量
function coinChange(coins: number[], amount: number): number {
    const n = coins.length;

    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(amount + 1);
    }

    // 初始化
    dp[0][0] = 0;
    for (let target = 1; target <= amount; target++) {
        if (target % coins[0] === 0) {
            dp[0][target] = target / coins[0];
        } else {
            dp[0][target] = Infinity;
        }
    }

    // 状态转移，每次迭代增加一种可以使用的硬币，对比完全不使用新增加的硬币（dp[i-1][target]）与使用新增加的硬币（dp[i][target-coins[i]]+1），哪种方案使用的硬币总数最少
    // 这里的精髓是dp[i][target-coins[i]]+1，由于是从target=0的情况开始迭代的，使用新增加的硬币来凑target的最优方案是逐步考虑齐全的，不用担心计算例如dp[1][7]是要考虑所有dp[1][7-2]、dp[1][7-4]等所有情况，只需要对比dp[0][7]和dp[1][7-2]即可
    for (let i = 1; i < n; i++) {
        for (let target = 0; target <= amount; target++) {
            dp[i][target] = Infinity;
            dp[i][target] = Math.min(
                dp[i - 1][target],
                (dp[i][target - coins[i]] === undefined
                    ? Infinity
                    : dp[i][target - coins[i]]) + 1,
            );
        }
    }

    return dp[n - 1][amount] === Infinity ? -1 : dp[n - 1][amount];
}
