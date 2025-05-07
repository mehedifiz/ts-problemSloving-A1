"use strict";
const formatString = (input, toUpper) => {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
};
const resust1 = formatString("hello");
const resust2 = formatString("hello", true);
const resust3 = formatString("hello", false);
console.log(resust1);
console.log(resust2);
console.log(resust3);
