// 0-1背包问题略微变形
// 自己想到的状态转移方程的写法，但是debug了很多次才写对
// TODO题解给出了简化成标准0-1背包的方法

// 有n个物品，需要在物品中挑选，使得总价值刚好为target，问有多少种挑选方式
// 注意拿取一个物品会增加总价值，不拿则会减少总价值
function findTargetSumWays(nums: number[], target: number): number {
    const n = nums.length;

    // dp[i][v]表示，在[0,i]物品中挑选，使得总价值刚好为v，有几种挑选方式
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Map();
    }
    // 初始化，注意若第一个物品价值为0，则规定使得总价值刚好为0的挑选方式有2种
    if (nums[0] === 0) {
        dp[0].set(0, 2);
    } else {
        dp[0].set(nums[0], 1);
        dp[0].set(-nums[0], 1);
    }

    for (let i = 1; i < n; i++) {
        for (const [v, methods] of dp[i - 1]) {
            dp[i].set(v + nums[i], (dp[i].get(v + nums[i]) || 0) + methods);
            dp[i].set(v - nums[i], (dp[i].get(v - nums[i]) || 0) + methods);
        }
    }
    return dp[n - 1].get(target) || 0;
}
