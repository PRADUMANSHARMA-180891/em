// //remove duplicate string
// let str = "praduman";

// let str1 = str.split('')

// const remDuplicate=[... new Set(str1)]

// console.log(remDuplicate.join(""));

// // using function string
// let str2 = "praduman";

// const findDuplicate=(str)=>{
//     const dpli= str.split("") 
//    return [...new Set(dpli)]
// }

// const duplicate =  findDuplicate(str2);
// console.log(duplicate.join(""))

// // remove duplicate element in arrey

// const arr = [2,2,4,5,6,3,2,6,3];

// const duplicate1 =[... new Set(arr)];

// console.log(duplicate1);

// // find duplicate element

// const duplicate2 = [7,3,4,5,2,1,3,5,3,4];
// const newArrey = duplicate2.filter((element,index,array)=>array.indexOf(element)!==index)

//console.log(newArrey)

// const findDup = (findDup)=>{
    
//     const findnumber = findDup.filter((ele,index,arr1)=>arr1.indexOf(ele)!==index)
//     return findnumber;
// }

// console.log(findDup(duplicate2))


// let arr = 'paaskmkm';
// let obj ={};//2
// let result =""
// let duplicate =''
// const remDuplicate =(arr)=>{
//       for(i=0;i<arr.length;i++){
//          if(!obj[arr[i]]){
//             result.push(arr[i])
//          }else{
//              duplicate.push(arr[i])
//          }

//          obj[arr[i]] =true

//       }

//       return duplicate
// }

// console.log(remDuplicate(arr))


 
let str = [1,2,6,6,33,7,8,2,1];
let duplicate =''
let result =''
let obj ={}
const findnumber =(str)=>{
     let length =str.length
     for(i=0;i<length;i++){
        if(!obj[str[i]]){
         result =result+str[i]
        }else{
           duplicate =duplicate+str[i]
        }
         obj[str[i]] =true
     }
     return duplicate
}

console.log(findnumber(str))