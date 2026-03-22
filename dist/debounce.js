"use strict";
// js version
// const debounce = (fn, delay: number = 3000) => {
//   let timer: () => void;
//   return function (...para) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, para), delay);
//   };
// };
// ts version
const debounce = (fn, delay = 2500) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(args), delay);
    };
};
debounce((query = "loading") => {
    console.log(query);
}, 2500)();
