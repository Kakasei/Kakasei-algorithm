/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    preorder(root, result);
    return result;
}

const preorder = (root: TreeNode | null, result: number[]) => {
    if (root === null) {
        return;
    }

    result.push(root.val);
    preorder(root.left, result);
    preorder(root.right, result);
};
