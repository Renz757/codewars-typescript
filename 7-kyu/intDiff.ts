// 7 kyu Integer Difference

//nest loop solution
export const intDiff = (arr: number[], n: number): number => {
  let count: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === n) count++;
    }
  }
  return count;
};

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)); // 3
console.log(intDiff([1, 1, 3, 3], 2)); // 4

//create counter variable
//loop over array with i
//loop over array with j
//subtract and compare to n
//if = to n, add 1 to counter
//return counter
