"use strict";
//7-kyu Get the Middle Character 
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddle = void 0;
var getMiddle = function (s) {
    if (s.length === 1)
        return s;
    var arr = s.split("");
    if (arr.length % 2 == 0) {
        //if even
        var middle = Math.ceil(arr.length / 2);
        return [arr[middle - 1], arr[middle]].join("");
    }
    else {
        var num = Math.floor(arr.length / 2);
        return [arr[num]].join("");
    }
};
exports.getMiddle = getMiddle;
console.log((0, exports.getMiddle)("strin"));
console.log((0, exports.getMiddle)("testing"));
console.log((0, exports.getMiddle)("test"));
console.log((0, exports.getMiddle)("middle"));
console.log((0, exports.getMiddle)("middle"));
//if string === 1 return string 
//check if string is even or odd
//use split to break string into an array
//if odd, return middle character
//if even return middle 2 characters
//join array and return middle character(s)
