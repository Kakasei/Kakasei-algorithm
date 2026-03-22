// arr = [1,2,3,4,5,6,.....]
const fn = (arr) => {
    const n = arr.length;
    const result = [];
    result.push(arr.slice(0, Math.floor(n / 2)));
    result.push(arr.slice(Math.floor(n / 2)));
    return result;
};

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(fn(arr));
