// 自己琢磨的写法，不过这道题的常规思路是用单调栈

function dailyTemperatures(temperatures: number[]): number[] {
    const length = temperatures.length;

    const result: number[] = [];
    result[length] = 0;

    temperatures.push(-Infinity);
    for (let i = length - 1; i >= 0; i--) {
        let index = i + 1;
        while (true) {
            if (temperatures[index] > temperatures[i]) {
                result[i] = index - i;
                break;
            } else if (result[index] === 0) {
                result[i] = 0;
                break;
            } else {
                index += result[index];
            }
        }
    }
    result.pop();
    return result;
}
