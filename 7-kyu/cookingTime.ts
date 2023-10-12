//7 Kyu - Boiled Eggs 

export const cookingTime = (eggs: number): number => {
    if (eggs === 0) return 0
    if (eggs < 8) return 5
    let timer = 5
    while (eggs > 8) {
        eggs = eggs - 8
        timer += 5
    }

    return timer 
}

console.log(cookingTime(16)) // 10
console.log(cookingTime(0)) // 0
console.log(cookingTime(6)) // 5
console.log(cookingTime(10)) // 10

//conditions - can only boil 8 eggs at a time and take 5 mins to boil
//return 0 if eggs === 0
//return 5 if eggs < 8
//initialize timer var and set to 5
//check the amount of eggs 
//while the number of eggs > 8,  subtract from 8, add 5 to timer var 
//return timer 
