function canJump(nums: number[]): boolean {
    const n = nums.length;
    const canJump: boolean[] = new Array(n).fill(false);
    canJump[n - 1] = true;

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + nums[i]; j > i; j--) {
            if (j >= n || canJump[j]) {
                canJump[i] = true;
                break;
            }
        }
    }

    return canJump[0];
}
