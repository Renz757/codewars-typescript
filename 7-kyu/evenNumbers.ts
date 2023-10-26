//7-kyu - Even numbers in an array

export const evenNumbers = (array: number[], n: number): number[] => {
  const evenArr: number[] = [];
  let counter = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (counter >= n) return evenArr;
    if (array[i] % 2 === 0) {
      evenArr.unshift(array[i]);
      counter += 1;
    }
  }
  return evenArr;
};

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // [-8, 26]

//create empty array and counter var
//start loop from the end
//check if element is even
//if even, add to begining of new array
//stop loop once  counter >= n (second param)
//return new array
