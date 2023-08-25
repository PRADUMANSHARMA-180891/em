
let arr1 =[3,5,6,8,12];
let arr2 = [3,5,6,7,1];

const union =[...arr1,...arr2];
const union2=[... new Set(union)]
console.log(union2);




