// 简单题，按直觉去写，一次通过
// 牛客网友面试真题2026-01小红书日常实习

function islandPerimeter(grid: number[][]): number {
    const m = grid.length,
        n = grid[0].length;
    const DIRECTION: number[][] = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                for (const dir of DIRECTION) {
                    const k = i + dir[0],
                        l = j + dir[1];
                    if (
                        k < 0 ||
                        k >= m ||
                        l < 0 ||
                        l >= n ||
                        grid[k][l] === 0
                    ) {
                        result++;
                    }
                }
            }
        }
    }

    return result;
}
