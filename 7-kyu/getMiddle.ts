export const getMiddle = (s: string): string => {
    if (s.length === 1) return s
    const arr = s.split("");
  if (arr.length % 2 == 0) {
    //if even
    let middle = Math.ceil(arr.length / 2);

    return [arr[middle - 1], arr[middle]].join("");
  } else {
    let num = Math.floor(arr.length / 2);
    return [arr[num]].join("");
  }
};

console.log(getMiddle("strin"));
console.log(getMiddle("testing"));
console.log(getMiddle("test"));
console.log(getMiddle("middle"));
console.log(getMiddle("middle"));

//if string === 1 return string 
//check if string is even or odd
//use split to break string into an array
//if odd, return middle character
//if even return middle 2 characters
//join array and return middle character(s)
