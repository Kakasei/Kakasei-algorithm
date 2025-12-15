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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root === null) {
        return;
    }

    if (root.left === null && root.right === null) {
        return root;
    }

    if (root.left && root.right === null) {
        const leftTail = flatten(root.left);
        root.right = root.left;
        root.left = null;
        return leftTail;
    }

    if (root.left === null && root.right) {
        const rightTail = flatten(root.right);
        return rightTail;
    }

    const leftTail = flatten(root.left);
    const rightTail = flatten(root.right);

    leftTail.right = root.right;
    root.right = root.left;
    root.left = null;
    return rightTail;
};
