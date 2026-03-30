function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const path: string[] = [];
    let left = 0,
        right = 0;

    const dfs = () => {
        if (path.length === 2 * n) {
            result.push(path.join(""));
            return;
        }

        if (left < n) {
            path.push("(");
            left++;
            dfs();
            path.pop();
            left--;
        }

        if (right < left) {
            path.push(")");
            right++;
            dfs();
            path.pop();
            right--;
        }
    };
    dfs();

    return result;
}
