// 123 = 1+2+3=6


// let num = 123 =1+2+3 =6
let num =123;
const sumofdigit =(num)=>{
    let sum = num.toString().split('').map(Number);

    console.log(sum)

    const addNum = sum.reduce((prevElm,curElm)=>{
        return prevElm + curElm
    })
    return addNum

}

console.log(sumofdigit(num))