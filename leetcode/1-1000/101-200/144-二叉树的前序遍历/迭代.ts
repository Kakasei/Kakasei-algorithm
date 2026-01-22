// 二叉树的前序遍历，比较容易想到递归，我们知道递归的时候隐式地使用了栈
// 也可以通过迭代的方式前序遍历，实际上就是显式地使用栈来遍历
// 注意，实现的时候直接把js的数组当作栈来用就行了
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
    if (root === null) {
        return [];
    }

    const stack: TreeNode[] = [root];
    const result: number[] = [];

    while (stack.length) {
        const root = stack.pop();
        if (root === null) {
            continue;
        }
        result.push(root.val);
        stack.push(root.right);
        stack.push(root.left);
    }

    return result;
}
