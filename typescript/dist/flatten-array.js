"use strict";
const flattenArray = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
    }, []);
};
// const flattenArray = (array: any[]): any[] => {
//   const result = [];
//   for (const item of array) {
//     if (Array.isArray(item)) {
//       result.push(...flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// };
const result = flattenArray([1, [2, [3, [4, [5]]], 6]]);
console.log(result);
