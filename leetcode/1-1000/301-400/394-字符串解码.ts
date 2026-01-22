// 自己琢磨的递归解法
// 实现的时候不熟悉语言，debug了好几次
// 比如递归函数用到了闭包，那就不需要再传参了，传的参会变成局部变量，直接死循环
// js中重复字符串一般直接 str * num，但ts中不能这么做，要用str.repeat()
// 字符串解析成数字，用k=k*10+parseInt(c)
// TODO反复揣摩

function decodeString(s: string): string {
    const result = [];

    let i = 0;
    const decode = (): string => {
        const arr: string[] = [];
        let k = 0;
        while (s[i] >= "0" && s[i] <= "9") {
            k = k * 10 + parseInt(s[i]);
            i++;
        }
        i++;
        while (s[i] !== "]") {
            if (s[i] >= "1" && s[i] <= "9") {
                arr.push(decode());
            } else {
                arr.push(s[i]);
                i++;
            }
        }
        i++;

        return arr.join("").repeat(k);
    };

    while (i < s.length) {
        // s[i]是一个数字，开始解码
        if (s[i] > "0" && s[i] <= "9") {
            result.push(decode());
        } else {
            result.push(s[i]);
            i++;
        }
    }

    return result.join("");
}
