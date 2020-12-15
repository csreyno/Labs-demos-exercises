//Exercise 1 
//1. From an unsorted array of numbers 1 to 100 excluding one number, how
// would you find the missing number?

let numArr = [1, 3, 5, 4, 6, 7, 8, 9, 10]


let sortedArr = numArr.sort((a, b) => a - b);
console.log(sortedArr);

function missingNum() {
    for (i=0; i < sortedArr.length; i++);
        if  ((i + 1) != sortedArr[i]) {
            console.log((sortedArr[i]-1));
            // return numArr[i]
        } 
}
missingNum(sortedArr)

// python:
// array = [2, 99,4, 3, 62, 6,7, 90,9, 10, 11, 12, 20, 14, 15, 16,17, 18, 19, 13, 21, 22, 29, 24, 25,26, 27, 28, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 48, 41, 43, 44, 45, 46, 47, 42, 49, 50, 51, 52, 53, 54, 59, 56, 57, 58, 55, 60, 61, 5, 63, 69, 65, 70, 67, 68, 64, 66, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 8, 91, 94, 93, 92, 95, 96, 100, 98, 1, 97]
// array.sort()
// # print (array)
// let n = 1
// for el in array:
//     if n == el:
//         n += 1
//     else:
//         print(n)
//         break

//exercise 4
//Reverse a String

// const reverseString =(str)=>{
//     let newString = "";
//     for(let i = str.length -1; i >= 0; i--){
//         newString += str[i]
//     }
//     console.log(newString)
// }
// reverseString('America')
// const reverseString2 = (str)=>{
//     return str.split('').reverse().join('')
// }
// console.log(reverseString2('Hippopotamus'))




