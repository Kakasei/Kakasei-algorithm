// 自己琢磨的写法，非常烂，但是能过

function orangesRotting(grid: number[][]): number {
    const m = grid.length,
        n = grid[0].length;
    const DIRECTION = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    let minute = 0;
    let isChange = false;
    let rotting: number[][] = [];

    do {
        isChange = false;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0 || grid[i][j] === 3 || grid[i][j] === 4) {
                    continue;
                } else if (grid[i][j] === 1) {
                    let count = 0;
                    for (const dir of DIRECTION) {
                        const k = i + dir[0],
                            l = j + dir[1];

                        if (k >= 0 && k < m && l >= 0 && l < n) {
                            if (grid[k][l] === 0) {
                                count++;
                            } else {
                                break;
                            }
                        } else {
                            count++;
                        }
                    }
                    if (count === 4) {
                        return -1;
                    }
                } else if (grid[i][j] === 2) {
                    // grid===4表示该橘子已经无法传染周围了，可以直接跳过
                    grid[i][j] = 4;

                    for (const dir of DIRECTION) {
                        const k = i + dir[0],
                            l = j + dir[1];
                        if (
                            k >= 0 &&
                            k < m &&
                            l >= 0 &&
                            l < n &&
                            grid[k][l] === 1
                        ) {
                            // 相邻橘子置为待腐烂的橘子grid===3
                            grid[k][l] = 3;
                            rotting.push([k, l]);
                            isChange = true;
                        }
                    }
                }
            }
        }
        if (isChange) {
            for (const [k, l] of rotting) {
                grid[k][l] = 2;
            }
            rotting = [];
            minute++;
        }
    } while (isChange);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return minute;
}
