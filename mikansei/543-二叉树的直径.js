// 自己摸索着写出来了，这似乎属于树形DP类型的题目
// TODO需要继续揣摩，这道题是树形DP的入门题，hot100

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;

    // 递归计算每个子树的lDepth和rDepth,lDepth+rDepth是经过该子树的根节点的最长路径的长度
    // 注意经过最顶层root的路径未必是最长的，可能存在某条经过子树的根节点的路径是最长的
    const dfs = (node) => {
        if (node === null) {
            return 0;
        }
        const lDepth = dfs(node.left);
        const rDepth = dfs(node.right);
        maxDiameter = Math.max(maxDiameter, lDepth + rDepth);
        return Math.max(lDepth, rDepth) + 1;
    };

    dfs(root);

    return maxDiameter;
};
