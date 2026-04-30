"use strict";
const isPalindrome = (str) => {
    const result = str.split("").reverse().join("");
    const isCorrect = str === result;
    console.log(isCorrect);
    return str === result;
};
isPalindrome("racecar");
isPalindrome("hello");
