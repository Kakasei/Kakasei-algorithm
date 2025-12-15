// 仍然是利用二叉搜索树的中序遍历性质
// TODOhot100，二叉搜索树基础题，需要完全掌握

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let count = k;
    let result;
    let flag = false;
    const inorder = (node) => {
        if (flag) {
            return;
        }
        if (node.left) inorder(node.left);
        if (count === 1) {
            result = node.val;
            flag = true;
            count = Infinity;
            return;
        } else {
            count--;
        }
        if (node.right) inorder(node.right);
    };
    inorder(root);
    return result;
};
