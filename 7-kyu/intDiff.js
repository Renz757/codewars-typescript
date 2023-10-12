"use strict";
// 7 kyu Integer Difference
Object.defineProperty(exports, "__esModule", { value: true });
exports.intDiff = void 0;
//nest loop solution
var intDiff = function (arr, n) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === n)
                count++;
        }
    }
    return count;
};
exports.intDiff = intDiff;
console.log((0, exports.intDiff)([1, 1, 5, 6, 9, 16, 27], 4)); // 3
console.log((0, exports.intDiff)([1, 1, 3, 3], 2)); // 4
//create counter variable
//loop over array with i
//loop over array with j
//subtract and compare to n
//if = to n, add 1 to counter
//return counter
