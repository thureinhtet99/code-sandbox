"use strict";
const testButton = document.getElementById("text-btn");
const throttle = (fn, interval = 2000) => {
    let lastTime = 0;
    return function (...args) {
        const current = Date.now();
        if (current - lastTime >= interval) {
            lastTime = current;
            fn.apply(args);
        }
    };
};
testButton.addEventListener("click", throttle(() => console.log("scrolled", 2000)));
