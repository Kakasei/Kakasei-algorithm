// 有几天没写算法题了，脑子有点转不动...写的时候忘记了js没有整数，奇数/2的时候会带小数点
// TODO构建二叉搜索树的最基础题，hot100，需要完全掌握

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const BST = (left, right) => {
        if (left > right) {
            return null;
        }
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);

        root.left = BST(left, mid - 1);
        root.right = BST(mid + 1, right);

        return root;
    };
    return BST(0, nums.length - 1);
};
