//一次通过
function maxOperations(s: string): number {
    let oneNums = 0
    let result = 0
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '1') {
            oneNums++
            if (s[i + 1] === '0') {
                result += oneNums
            }
        }
    }
    return result
};