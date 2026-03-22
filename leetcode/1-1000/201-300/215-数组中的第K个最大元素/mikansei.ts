function findKthLargest(nums: number[], k: number): number {
    const n = nums.length;

    const partition = (left: number, right: number) => {
        const index = left + Math.floor(Math.random() * (right - left + 1));
        // 基准元素
        const pivot = nums[index];

        [nums[index], nums[left]] = [nums[left], nums[index]];
        let i = left + 1,
            j = right;

        while (true) {
            // 循环结束后，i指向>=基准元素的下标
            while (i <= j && nums[i] < pivot) {
                i++;
            }

            while (i <= j && nums[j] > pivot) {
                j--;
            }

            if (i >= j) {
                break;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
        [nums[left], nums[j]] = [nums[j], nums[left]];
        return j;
    };

    const find = (left: number, right: number) => {
        const i = partition(left, right);
        if (i === n - k) {
            return nums[i];
        } else if (i < n - k) {
            return find(i + 1, right);
        } else {
            return find(left, i - 1);
        }
    };

    return find(0, n - 1)!;
}
