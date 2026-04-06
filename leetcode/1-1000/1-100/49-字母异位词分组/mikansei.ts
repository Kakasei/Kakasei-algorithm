function groupAnagrams(strs: string[]): string[][] {
    const result: string[][] = [];
    const map = new Map<string, string[]>();
    for (const str of strs) {
        const key = str.split("").sort().join();
        if (map.has(key)) {
            const sameStrs = map.get(key)!;
            sameStrs.push(str);
            map.set(key, sameStrs);
        } else {
            map.set(key, [str]);
        }
    }
    
    map.values()
}
