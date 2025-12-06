function findAnagrams(s: string, p: string): number[] {
  let result: Array<number> = [];
  let n = p.length;

  const pMap = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
  }

  const sMap = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  //计算两map是否全等
  const areMapsEqual = (
    mapA: Map<string, number>,
    mapB: Map<string, number>
  ): boolean => {
    for (const [key, value] of mapA) {
      // 若[key,value===0]，则另一map中必须[key,value===0||value===undefined]
      if (value === 0 && (mapB.get(key) || 0) === 0) {
        continue;
      } //若[key,value!==0]，则value必须相等
      else if (value !== 0 && mapB.get(key) === value) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

  if (areMapsEqual(pMap, sMap)) {
    result.push(0);
  }

  for (let i = n; i < s.length; i++) {
    // 入：将新元素加入窗口
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    // 出：将左边元素移出窗口
    sMap.set(s[i - n], (sMap.get(s[i - n]) as number) - 1);

    // 更新：检查新窗口与pMap是否全等
    if (areMapsEqual(sMap, pMap)) {
      result.push(i - n + 1);
    }
  }

  return result;
}
