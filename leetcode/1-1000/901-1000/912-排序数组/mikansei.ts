// 经典的快速排序，也是实际中最常用的排序算法
// 快速排序的核心思想：
// 1、定义递归函数quickSort()
// TODO反复揣摩，快排是常考点

function sortArray(nums: number[]): number[] {
    // 每次划分都可以至少排好一个元素
    function partition(nums: number[], left: number, right: number) {
        // （1）
        // 子数组中随机取一个基准元素
        const index = left + Math.floor(Math.random() * (right - left + 1));
        const pivot = nums[index];
        // 交换基准元素到子数组开头，方便后续划分
        [nums[index], nums[left]] = [nums[left], nums[index]];

        // （2）
        // 此时子数组示意：
        // [pivot | <=pivot | 尚未划分 | >=pivot ]
        //         i                          j
        // i j 逐渐向中间遍历
        let i = left + 1,
            j = right;
        while (true) {
            // 这里应当为nums[i] < pivot，而不能是nums[i] <= pivot
            // 当子数组中存在大量重复元素时，<=容易导致最不均匀划分，时间复杂度退化到O(n^2)
            // 例如[2,1,2,2,2,2,2]，随机取基准元素很容易取到2
            // 若nums[i]<=pivot，则会使得j为数组最后一个元素的索引，划分最不均匀，且在之后的递归中划分大概率仍然不均匀，从而退化到O(n^2)
            // 若改为nums[i]<pivot，即使存在大量重复元素，i,j都会往中间靠拢，使得划分变得均匀
            while (i <= j && nums[i] < pivot) {
                i++;
            }
            while (i <= j && nums[j] > pivot) {
                j--;
            }
            if (i >= j) {
                break;
            }
            // 此时nums[i]>pivot，nums[j]<pivot，交换二者
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
        // （3）
        // 此时子数组示意：
        // [pivot | <=pivot | >=pivot ]
        //                j   i
        // 交换nums[left] nums[j]，使得：
        // [ <=pivot | pivot | >=pivot ]
        [nums[left], nums[j]] = [nums[j], nums[left]];

        // 返回此时pivot的下标，即j
        return j;
    }

    // 快速排序nums的[left,right]区间
    function quickSort(nums: number[], left: number, right: number) {
        // 优化：检查子数组是否已经有序，若有序则直接返回，减少递归次数
        // 当子数组长度为小于等于1的边界情况时，也正好结束递归
        let isOrder = true;
        for (let i = left; i < right; i++) {
            if (nums[i] > nums[i + 1]) {
                isOrder = false;
                break;
            }
        }
        if (isOrder) {
            return;
        }
        const i = partition(nums, left, right);
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }

    quickSort(nums, 0, nums.length - 1);
    return nums;
}
