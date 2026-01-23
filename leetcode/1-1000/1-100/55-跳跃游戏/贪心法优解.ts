// 非常优雅的解法，只要能【够到】last，就一定能到终点
// TODO熟练掌握

function canJump(nums: number[]): boolean {
    const n = nums.length;
    let last = n - 1;

    for (let i = n - 2; i >= 0; i--) {
        if (i + nums[i] >= last) {
            last = i;
        }
    }

    return last === 0;
}
