//8kyu - Find the smallest integer in the array

export const findSmallestInt = (args: number[]): number => {
  let smallestNum = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] < smallestNum) {
        smallestNum = args[i]
    }
  }
  return smallestNum
};

console.log(findSmallestInt([1 , 10, 0 , 25])) //0
console.log(findSmallestInt([34, -345, -1, 100])) //-345


//create smallestNum var and set = to first element
//loop through array
//compare smallestNum to current element
//if smaller, set current element to smallestNum
//else do nothing
//return smallestNum var
