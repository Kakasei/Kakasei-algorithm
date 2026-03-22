"use strict";

let a = {};
let b = a;
a = { count: 1 };

console.log(a, b);
