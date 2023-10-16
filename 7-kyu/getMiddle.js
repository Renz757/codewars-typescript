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
console.log(getMiddle("strin"));
console.log(getMiddle("testing"));
console.log(getMiddle("test"));
console.log(getMiddle("middle"));
console.log(getMiddle("middle"));
//number has to be > 0 but < 1000
//check if string is even or odd
//use split to break string into an array
//if odd, return middle character
//if even return middle 2 characters
