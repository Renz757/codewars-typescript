//6-kyu - Are they the "same"?

export const comp = (a1: number[] | null, a2: number[] | null): boolean => {
  const squared: Record<number, number> = {};
  const squareRoot: Record<number, number> = {};
  if (a1! == null || a2! == null) return false;

  for (let val of a1!) {
    squared[val] ? (squared[val] *= 2) : (squared[val] = Math.pow(val, 2));
  }

  for (let val of a2!) {
    squareRoot[Math.sqrt(val)]
      ? (squareRoot[Math.sqrt(val)] *= 2)
      : (squareRoot[Math.sqrt(val)] = val);
  }

  for (let val in squared) {
    if (squared[val] != squareRoot[val]) return false;
  }

  return true;
};

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
); // true
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736]
  )
); // false
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  )
); // false

console.log(
  comp(
    [2, 2, 3],
    [4, 9, 9]
  )
); // false

//a2 === a1^2 | a1 === √a2
//check if a1 and a2 are the same length or if null, if not return false
//initialize empty object named squared and squareRoot
//loop through a1, check if value exsits in squared object ? multiply 2 : initialize and set to value^2
//loop through a2, check if value exsits in squareRoot object ? multiply 2 : initialize and set to √value
//loop through squared object and compare values to squareRoot object
//if object lenght do not match return false
//if values do not match return false otherwise function will return true
