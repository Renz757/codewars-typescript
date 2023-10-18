"use strict";
//7-kyu stringArr in strings
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
function solve(s) {
    var reg = /\d+/g;
    var numberArr = [];
    var stringArr = s.match(reg);
    if (stringArr !== null) {
        for (var i = 0; i < stringArr.length; i++) {
            numberArr.push(+stringArr[i]);
        }
    }
    return Math.max.apply(Math, numberArr);
}
exports.solve = solve;
console.log(solve("gh12cdy695m1"));
//define regex to find all stringArr
//use match to separate stringArr in an array
//loop over array to find the largest
