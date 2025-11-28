// 这题简单得意味不明...
function minOperations(nums: number[], k: number): number {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum % k;
}
