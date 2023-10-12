"use strict";
//7 Kyu - Boiled Eggs 
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookingTime = void 0;
var cookingTime = function (eggs) {
    if (eggs === 0)
        return 0;
    if (eggs < 8)
        return 5;
    var timer = 5;
    while (eggs > 8) {
        eggs = eggs - 8;
        timer += 5;
    }
    return timer;
};
exports.cookingTime = cookingTime;
console.log((0, exports.cookingTime)(16)); // 10
console.log((0, exports.cookingTime)(0)); // 0
console.log((0, exports.cookingTime)(6)); // 5
console.log((0, exports.cookingTime)(10)); // 10
//conditions - can only boil 8 eggs at a time and take 5 mins to boil
//return 0 if eggs === 0
//return 5 if eggs < 8
//initialize timer var and set to 5
//check the amount of eggs 
//while the number of eggs > 8,  subtract from 8, add 5 to timer var 
//return timer 
