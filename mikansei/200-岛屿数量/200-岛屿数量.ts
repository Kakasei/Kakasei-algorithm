// 图论基础题，bfs和dfs都可以，这里是bfs解法，但是debug了几次
// TODO反复揣摩，需要完全掌握，hot100

function numIslands(grid: string[][]): number {
    let result = 0;

    const DIRECTION = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    const m = grid.length,
        n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                grid[i][j] = "0";
                const queue: number[][] = [];
                queue.push([i, j]);
                result++;
                while (queue.length) {
                    const [k, l] = queue.shift() as number[];
                    for (const dir of DIRECTION) {
                        const x = k + dir[0],
                            y = l + dir[1];
                        if (
                            x >= 0 &&
                            x < m &&
                            y >= 0 &&
                            y < n &&
                            grid[x][y] === "1"
                        ) {
                            grid[x][y] = "0";
                            queue.push([x, y]);
                        }
                    }
                }
            } else {
                continue;
            }
        }
    }

    return result;
}
