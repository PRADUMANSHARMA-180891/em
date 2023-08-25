// const ReverseString=(str)=>{
//    return str.split('').reverse().join('')
// }
// const myString  =  ReverseString('praduman');
// console.log(myString);

// withot any build in method

// const string = "sampal software";
// let reversestring =''
// for(i=string.length-1;i>=0;i--){
//     reversestring = reversestring+string[i]
     
// }
// console.log(reversestring)


let str = "praduman sharma";
let revesedString =''
const reversestring =(str)=>{
       for(i=str.length-1;i>=0;i--){
           revesedString = revesedString +str[i]
       }

       return revesedString
}

console.log(reversestring(str))