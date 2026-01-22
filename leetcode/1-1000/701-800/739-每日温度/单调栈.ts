// 虽然已经懂了单调栈的解法，但是自己实现的还是太差了，现在这个版本是参考了答案的优解

function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;

    const stack: number[] = [];
    const result: number[] = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const curTemperature = temperatures[i];
        while (
            stack.length > 0 &&
            curTemperature > temperatures[stack.at(-1)!]
        ) {
            const index = stack.pop()!;
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
}
