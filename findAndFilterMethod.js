// filter method return new arrey with match elment

const age = [2,12,13,19,32,,43];

const filterMethos = age.filter((ele)=>{
    return ele >18
})

console.log(filterMethos);

// find method only matches first match and then return new arrey
const age1 = [2,12,13,19,32,,43];

const findMethod = age1.find((ele)=>{
    return ele >18
})

console.log(findMethod);
