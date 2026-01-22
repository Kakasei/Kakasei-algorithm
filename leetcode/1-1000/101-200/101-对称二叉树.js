// 自己琢磨的迭代解法，debug了多次才通过
// 比较优雅的解法是将二叉树拆成两个子树，对比两子树的根节点是否相同，然后递归地镜像地比较它们的所有子树，与100-相同的树解法类似
// TODO用递归优化

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root.left === null && root.right === null) {
        return true;
    }
    const lNode = root.left;
    const rNode = root.right;
    if (lNode?.val !== rNode?.val) {
        return false;
    }

    const queue = [root.left, root.right];
    while (queue.length) {
        const curLevelLength = queue.length;
        // 保证队列中的节点是对称的
        // 每次都取对称的两个节点，对比它们的孩子是否对称
        for (let i = 0; i < curLevelLength / 2; i++) {
            const lNode = queue.shift();
            const rNode = queue.shift();

            const llNode = lNode.left;
            const lrNode = lNode.right;
            const rlNode = rNode.left;
            const rrNode = rNode.right;
            if (llNode?.val !== rrNode?.val || lrNode?.val !== rlNode?.val) {
                return false;
            }
            if (lrNode) queue.push(lrNode);
            if (rlNode) queue.push(rlNode);
            if (llNode) queue.push(llNode);
            if (rrNode) queue.push(rrNode);
        }
    }
    return true;
};
