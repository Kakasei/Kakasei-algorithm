// 只使用一个队列就可以层序遍历，核心点在于每次遍历一层时给队列长度拍一个快照，约束循环次数，这样就不会在出队入队的过程中越界
// TODO二叉树的层序遍历是最基础的题目，需要完全掌握这种解法

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }

    const queue = [root];
    const result: number[][] = [];

    while (queue.length > 0) {
        const n = queue.length;
        const currentNodes = [];
        for (let i = 0; i < n; i++) {
            const node = queue.shift()!;
            currentNodes.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(currentNodes);
    }
    return result;
}
