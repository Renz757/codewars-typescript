"use strict";
//6-kyu - Are they the "same"?
Object.defineProperty(exports, "__esModule", { value: true });
exports.comp = void 0;
var comp = function (a1, a2) {
    var squared = {};
    var squareRoot = {};
    if (a1 == null || a2 == null)
        return false;
    for (var _i = 0, _a = a1; _i < _a.length; _i++) {
        var val = _a[_i];
        squared[val] ? (squared[val] *= 2) : (squared[val] = Math.pow(val, 2));
    }
    for (var _b = 0, _c = a2; _b < _c.length; _b++) {
        var val = _c[_b];
        squareRoot[Math.sqrt(val)]
            ? (squareRoot[Math.sqrt(val)] *= 2)
            : (squareRoot[Math.sqrt(val)] = val);
    }
    if (Object.keys(squared).length != Object.keys(squareRoot).length)
        return false;
    for (var val in squared) {
        if (squared[val] != squareRoot[val])
            return false;
    }
    console.log(squared, squareRoot);
    return true;
};
exports.comp = comp;
console.log((0, exports.comp)([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])); // true
console.log((0, exports.comp)([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736])); // false
console.log((0, exports.comp)([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361])); // false
console.log((0, exports.comp)([2, 2, 3], [4, 9, 9])); // false
//a2 === a1^2 | a1 = √a2
//check if a1 and a2 are the same length, if not return false
//initialize empty object named squared and squareRoot
//loop through a1, check if value exsits in squared object ? multiply 1 to value or do nothing : initialize and set to value^2
//loop through a2, check if value exsits in squareRoot object ? multiply 1 to value or do nothing : initialize and set to √value
//loop through squared object and compare values to squareRoot object
//if object lenght do not match return false
//if values do not match return false otherwise function will return true
