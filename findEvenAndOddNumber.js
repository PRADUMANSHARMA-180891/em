// find even number

// const evenAndOdd =[2,1,4,6,8,9,2];

// const evenNumber =(evenAndOdd)=>{
//      const even =evenAndOdd.filter((element)=>{
//            return element % 2==0
//      })
//      return even
// }

// console.log(evenNumber(evenAndOdd))

// // find odd number
// const Odd =[2,1,4,6,8,9,2];

// const oddNumber =(Odd)=>{
//      const oddnum =Odd.filter((element)=>{
//            return element % 2!==0
//      })
//      return oddnum
// }

// console.log(oddNumber(Odd))


let num =[2,33,4,55,6,8];
let even = [];
let odd = [];
const findEvenAndOdd =(num)=>{
     for(i=0;i<=num.length;i++){
          char =num[i]
          if(char % 2 ==0){
              even.push(char)
          }
         

}
return even

}

console.log(findEvenAndOdd(num))