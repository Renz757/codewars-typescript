//7 kyu Collatz Conjecture Length

export const collatz = (n: number): number => {
  let collatzArray: number[] = [n];
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      collatzArray.push(n);
    } else {
      n = n * 3 + 1;
      collatzArray.push(n);
    }
  }
  return collatzArray.length;
};

console.log(collatz(20));
//initialize empty array
//while number > 1
//check if num is even or odd
//if even,set n = n divided by 2, add result to array
//if odd, set n = n * 3 + 1, add result to array
//return length of array
