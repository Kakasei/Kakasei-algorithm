// dfs解法，应当完全掌握

function numIslands(grid: string[][]): number {
    let result = 0;

    const dfs = (i: number, j: number) => {
        grid[i][j] = "0";
        for (const dir of DIRECTION) {
            const k = i + dir[0],
                l = j + dir[1];
            if (k >= 0 && k < m && l >= 0 && l < n && grid[k][l] === "1") {
                dfs(k, l);
            }
        }
    };

    const m = grid.length,
        n = grid[0].length;
    const DIRECTION = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                result++;

                dfs(i, j);
            }
        }
    }

    return result;
}
