function minSubarray(nums: number[], p: number): number {
    const n = nums.length;
    const s = new Array(n + 1);
    s[0] = 0;
    // [值，下标]
    const map = new Map();
    map.set(0, 0);
    for (let i = 0; i < nums.length; i++) {
        s[i + 1] = s[i] + nums[i];
        map.set(s[i + 1], i + 1);
    }

    if (s[nums.length] < p) return -1;
    let target = s[nums.length] % p;
    if (target === 0) return 0;

    let minDistance = Infinity;
    while (target < s[n]) {
        for (let i = 0; i < nums.length; i++) {
            if (map.has(target + s[i])) {
                minDistance = Math.min(minDistance, map.get(target + s[i]) - i);
            }
        }
        target += p;
    }

    return minDistance === Infinity ? -1 : minDistance;
}
