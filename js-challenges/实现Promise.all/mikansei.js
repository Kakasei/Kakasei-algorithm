Promise._all = function (promises) {
    const n = promises.length;
    if (n === 0) {
        return Promise.resolve([]);
    }
    const result = [];
    let i = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    result[index] = value;
                    i++;
                    if (i === n) {
                        resolve(result);
                        return;
                    }
                })
                .catch((reason) => {
                    reject(reason);
                    return;
                });
        });
    });
};
