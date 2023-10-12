"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collatz = void 0;
var collatz = function (n) {
    var collatzArray = [n];
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
            collatzArray.push(n);
        }
        else {
            n = n * 3 + 1;
            collatzArray.push(n);
        }
        console.log(collatzArray);
    }
    return collatzArray.length;
};
exports.collatz = collatz;
console.log((0, exports.collatz)(20));
//initialize empty array
//while number > 1
//check if num is even or odd
//if even, divide by 2, add result to array
//if odd, multiple by 3 + 1, add result to array
//return length of array
