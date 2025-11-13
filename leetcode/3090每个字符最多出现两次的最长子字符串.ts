// 不定长滑动窗口：入-出-更新
// 学习了通过 (map.get()||0) 简化代码

function maximumLengthSubstring(s: string): number {
  let l = 0,
    r = 1;
  const map = new Map<string, number>();
  // 初始化
  map.set(s[l], 1);
  map.set(s[r], map.get(s[r]) ? 2 : 1);

  let maxLength = 2;

  for (r = 2; r < s.length; r++) {
    // 入：将新元素加入窗口
    map.set(s[r], (map.get(s[r]) || 0) + 1);

    // 出：维护窗口合法
    while ((map.get(s[r]) || 0) > 2) {
      map.set(s[l], (map.get(s[l]) as number) - 1);
      l++;
    }

    // 更新:更新最大值
    maxLength = Math.max(maxLength, r - l + 1);
  }

  return maxLength;
}
