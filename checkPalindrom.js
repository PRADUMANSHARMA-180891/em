
// const isPalindrom = "nan"

// const paly=(str)=>{
//     let strLen =  str.length;

//     for (i=0; i <strLen; i++){
//         if(str[i]==str[strLen-1-i]){
//             return `${str} is palindrom`

//         }

//         return `${str} is not palindrom`

//     }

// }

//  const myPalindrom = paly(isPalindrom);

//  console.log(myPalindrom)


let string = "pap";

const cheackpalindrom =(string)=>{
     for(i=0;i<string.length;i++){
       let  str =string.length
        if(string[i]==string[str-1-i]){
            return `${string} is palindrom`
        }else{
            return `${string} is not palindrom`
        }
     }
}

console.log(cheackpalindrom(string))
