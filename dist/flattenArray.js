"use strict";
const flattenArray = (arr) => {
    return arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
    }, []);
};
const result = flattenArray([1, [2, [3, [4, [5]]], 6]]);
console.log(result);
