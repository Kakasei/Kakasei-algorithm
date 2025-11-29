/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 *
 * 一次通过
 *
 */
var minCost = function (colors, neededTime) {
  let result = 0;
  let l = 0,
    r = 1;

  while (r < colors.length) {
    if (colors[l] !== colors[r]) {
      l++, r++;
    } else {
      r++;
      while (r < colors.length && colors[r] === colors[l]) {
        r++;
      }
      let max = neededTime[l];
      let sum = neededTime[l];
      for (let i = l + 1; i < r; i++) {
        max = Math.max(max, neededTime[i]);
        sum += neededTime[i];
      }
      result += sum - max;
      (l = r), r++;
    }
  }
  return result;
};
