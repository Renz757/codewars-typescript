"use strict";
//8kyu - Find the smallest integer in the array
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSmallestInt = void 0;
var findSmallestInt = function (args) {
    var smallestNum = args[0];
    for (var i = 1; i < args.length; i++) {
        if (args[i] < smallestNum) {
            smallestNum = args[i];
        }
    }
    return smallestNum;
};
exports.findSmallestInt = findSmallestInt;
console.log((0, exports.findSmallestInt)([1, 10, 0, 25])); //0
console.log((0, exports.findSmallestInt)([34, -345, -1, 100])); //-345
//create smallestNum var and set = to first element
//loop through array
//compare smallestNum to current element
//if smaller, set current element to smallestNum
//else do nothing
//return smallestNum var
