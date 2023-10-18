//7-kyu stringArr in strings

//Original 

// export function solve(s: string): number {
//   const reg = /\d+/g;
//   const numberArr: number[] = [];
//   let stringArr = s.match(reg);
//   if (stringArr !== null) {
//     for (let i = 0; i < stringArr.length; i++) {
//       numberArr.push(+stringArr[i]);
//     }
//   }

//   return Math.max(...numberArr);
// }

//Refactored

export function solve(s: string): number {
  const reg = /\d+/g;
  const matches = s.match(reg);
  if (matches !== null)
    return Math.max(...matches.map((match) => parseInt(match, 10)));
  else return 0;
}

console.log(solve("gh12cdy695m1"));
//define regex to find all stringArr
//use match to separate stringArr in an array
//loop over array to find the largest
