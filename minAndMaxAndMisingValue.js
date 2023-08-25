// // find min value
// const arr = [1,32,1,65,2,4]
// const minAndMax =(arr)=>{
//     const min = Math.min(...arr)
//     return min
// }
// console.log(minAndMax(arr))

// //find max value

// const arr1 = [1,32,1,65,2,4]
// const minMax =(arr1)=>{
//     const max = Math.max(...arr1)
//     return max
// }
// console.log(minMax(arr1));

// //find mising number in arrey
let num =[2,4,6,3,7,10,16];
let  misingElement= []
const findmisingNumber =(num)=>{
   const minNumber =Math.min(...num);
   const maxNumber = Math.max(...num)

   for(let i = minNumber; i<maxNumber; i=i+1 ){
         if(!num.includes(i)){
              misingElement.push(i)
       
         }
       
   }
   return misingElement
}

console.log(findmisingNumber(num))
// let findMissNum = 0;
// const findMissingNumber1 = (number) => {
   
//     let n = number.length + 1;
//     let totalsum = (n * (n + 1)) / 2;

//     for (let i = 0; i < number.length; i++) {
//         findMissNum += number[i];
//     }

//     return totalsum - findMissNum;
// }

// const number = [0, 1, 5, 3, 4, 6];
// console.log(findMissingNumber1(number));


// const findMissingNumber = (numbers) => {
//     const n = numbers.length + 1;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = numbers.reduce((sum, num) => sum + num, 0);
//     return expectedSum - actualSum;
// }

// const numbers = [0, 1, 5, 3, 4, 6];
// console.log(findMissingNumber(numbers));

