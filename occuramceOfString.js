
// // check occurance of string
// let string ="feihoiwjj";
// let object = {}
// for(i=0;i<string.length;i=i+1){
   
//    let char =string[i];
//    if(object[char]){
//     object[char]++
//    }else{
//     object[char]=1
//    }
   
  

// }

// console.log(object)


// let string ="praduman";
// let obj ={}
// for(i=0;i<string.length;i++){
//    let char = string[i]
//    console.log(char)
//    if(obj[char]){
//       obj[char]++
//    }else{
//       obj[char]=1
//    }
 
// }

// console.log(obj)


let string = 'praduman'
let obj ={};//{p:1,r:1,a:2}

 const acurranceOfString =(string)=>{
    for(i=0;i<string.length;i++){
      let char = string[i]
         if(obj[char]){
            obj[char]++
         }else{
           obj[char]=1
         }
         
    }
     return obj
}

console.log(acurranceOfString(string))