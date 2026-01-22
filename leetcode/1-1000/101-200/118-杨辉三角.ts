// TODO我是猪，这道题居然错了好几次
function generate(numRows: number): number[][] {
    const arr: number[][] = [[1]];
    for (let i = 1; i < numRows; i++) {
        arr[i] = [];
        for (let j = 0; j < i + 1; j++) {
            arr[i][j] = (arr[i - 1][j - 1] || 0) + (arr[i - 1][j] || 0);
        }
    }
    return arr;
}
