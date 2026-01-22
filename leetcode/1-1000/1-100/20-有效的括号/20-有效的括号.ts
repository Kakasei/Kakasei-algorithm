// 自己琢磨的写法，有点啰嗦

function isValid(s: string): boolean {
    const stack: string[] = [];

    for (const c of s) {
        const top = stack.at(-1);
        if (top === undefined) {
            stack.push(c);
            continue;
        }
        if (top === "(") {
            if (c === "]" || c === "}") {
                return false;
            }
            if (c === ")") {
                stack.pop();
                continue;
            }
            stack.push(c);
            continue;
        }
        if (top === "[") {
            if (c === ")" || c === "}") {
                return false;
            }
            if (c === "]") {
                stack.pop();
                continue;
            }
            stack.push(c);
            continue;
        }
        if (top === "{") {
            if (c === "]" || c === ")") {
                return false;
            }
            if (c === "}") {
                stack.pop();
                continue;
            }
            stack.push(c);
            continue;
        }
    }
    return stack.length === 0 ? true : false;
}
