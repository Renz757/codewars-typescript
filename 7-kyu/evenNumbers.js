"use strict";
//7-kyu - Even numbers in an array
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenNumbers = void 0;
var evenNumbers = function (array, n) {
    var evenArr = [];
    var counter = 0;
    for (var i = array.length - 1; i >= 0; i--) {
        if (counter >= n)
            return evenArr;
        if (array[i] % 2 === 0) {
            evenArr.unshift(array[i]);
            counter += 1;
        }
    }
    return evenArr;
};
exports.evenNumbers = evenNumbers;
console.log((0, exports.evenNumbers)([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]
console.log((0, exports.evenNumbers)([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // [-8, 26]
//create empty array
//start loop from the end
//check if element is even
//if even, add to begining of new array
//stop loop once  i >= n (second param)
//return new array
