// compare two arrey or intersection
let arr1 = [2,4,76,7];
let arr2 =[3,4,6,7];

const compare = arr1.filter((element,index,arrey)=>{
      return arr2.includes(element)
})

console.log(compare)