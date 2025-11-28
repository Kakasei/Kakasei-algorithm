// 二维dp基础题，把矩阵画出来就很容易理解

// 二维状态数组dp[m][n]表示到达(m,n)处路径和最小的值
function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    const dp: number[][] = [];
    for (let i = 0; i < m; i++) {
        dp[i] = [];
    }
    dp[0][0] = grid[0][0];
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] =
                Math.min(
                    dp[i][j - 1] === undefined ? Infinity : dp[i][j - 1],
                    dp[i - 1][j] === undefined ? Infinity : dp[i - 1][j],
                ) + grid[i][j];
        }
    }

    return dp[m - 1][n - 1];
}
