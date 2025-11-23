// 前缀和基础题
// 一次通过
function subarraySum(nums: number[]): number {
    let result = 0;
    const s: number[] = [0];

    for (let i = 0; i < nums.length; i++) {
        s[i + 1] = s[i] + nums[i];
        let start = Math.max(0, i - nums[i]);
        result += s[i + 1] - s[start];
    }

    return result;
}
