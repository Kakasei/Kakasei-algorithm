// 二叉树层序遍历的基础题，一次通过

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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length) {
        const curLevelLength = queue.length;
        for (let i = 0; i < curLevelLength - 1; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        const rightNode = queue.shift();
        result.push(rightNode.val);
        if (rightNode.left) {
            queue.push(rightNode.left);
        }
        if (rightNode.right) {
            queue.push(rightNode.right);
        }
    }

    return result;
};
