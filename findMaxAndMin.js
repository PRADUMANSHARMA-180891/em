// const findMaxAndMin = [2,4,3,77,6,33];

// const numberWouldBe=findMaxAndMin.reduce((previosElement,currentElement)=>{
//   return  previosElement>currentElement?previosElement :currentElement

// });

// console.log(numberWouldBe)


let arr = [1,34,3,55,22,2];

const findmax = arr.reduce((PrevElm,currElm)=>{
  return PrevElm > currElm ?PrevElm :currElm
})

console.log(findmax)