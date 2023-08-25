
let arr1 =[1,3,34,5];

let arr2 = [3,1,6,8];

let finalArr = arr1.concat(arr2);
let sorted =finalArr.sort((a,b)=>{
    return a-b
})

console.log(sorted);