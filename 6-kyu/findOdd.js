"use strict";
//6-kyu Find the odd int
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
var findOdd = function (xs) {
    if (xs.length === 1)
        return xs[0];
    var count = {};
    for (var _i = 0, xs_1 = xs; _i < xs_1.length; _i++) {
        var value = xs_1[_i];
        count[value] ? (count[value] += 1) : (count[value] = 1);
    }
    var oddNum;
    for (var value in count) {
        if (count[value] % 2 != 0) {
            oddNum = count[value];
        }
    }
    return +Object.keys(count).filter(function (key) { return count[Number(key)] === oddNum; });
};
exports.findOdd = findOdd;
console.log((0, exports.findOdd)([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
console.log((0, exports.findOdd)([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log((0, exports.findOdd)([1])); // 1
//create empty count object
//loop through array
//for every element, check if value exsits in object, if false initialize and set to 1, if true add 1
//loop over object
//check if value is odd
//if odd return object key
