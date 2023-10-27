//6-kyu Find the odd int

export const findOdd = (xs: number[]): number => {
  if (xs.length === 1) return xs[0];
  const count: Record<number, number> = {};
  for (let value of xs) {
    count[value] ? (count[value] += 1) : (count[value] = 1);
  }

  let oddNum: number | undefined;
  for (let value in count) {
    if (count[value] % 2 != 0) {
      oddNum = count[value];
    }
  }
  return +Object.keys(count).filter((key) => count[Number(key)] === oddNum)!;
};

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([1])); // 1

//create empty count object
//loop through array
//for every element, check if value exsits in object, if false initialize and set to 1, if true add 1
//loop over object
//check if value is odd
//if odd return object key
