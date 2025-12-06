// 这道题有一个点，若数个异步请求相互之间没有依赖关系，那就应当用Promise.all让它们并发启动提高效率


/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    return result1 + result2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
