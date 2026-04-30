"use strict";
const testButton = document.getElementById("text-btn");
// - marks T as variable of throttle function
// - extends function's params
// - return function's params with typeof Parameters
// - return callback fn
const throttle = (fn, interval = 1000) => {
    let lastTime = 0;
    return function (...params) {
        const current = Date.now();
        if (current - lastTime >= interval) {
            lastTime = current;
            fn.apply(this, params);
        }
    };
};
testButton.addEventListener("click", throttle(() => console.log("scrolled", 2000)));
