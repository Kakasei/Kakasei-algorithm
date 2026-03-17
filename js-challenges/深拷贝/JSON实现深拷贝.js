// JSON深拷贝，是深拷贝最简明的实现，缺陷是无法处理undefined 函数 Date 正则等特殊类型，以及无法处理循环引用，对大规模数据的性能也不好

const origin = {
    name: "Kakasei",
    details: {
        age: 18,
        gender: "non-binary",
    },
    girlfriend: undefined,
    fn: () => {
        console.log("hello");
    },
    symbol: Symbol("SSR"),
    time: new Date(),
    state: {
        hp: Infinity,
        mp: NaN,
    },
    技能: new Map([["fire", "火球术"]]),
    装备: new Set([["剑", "盾"]]),
    正则: /boss/i,
};

console.log(origin);

const copy1 = JSON.parse(JSON.stringify(origin));
console.log(copy1);
