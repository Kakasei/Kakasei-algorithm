function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    const path: number[] = [];

    // dfs(i)表示在空位上枚举i到n
    const dfs = (i: number) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let num = i; num <= n; num++) {
            path.push(num);
            dfs(num + 1);
            path.pop();
        }
    };
    dfs(1);

    return result;
}
