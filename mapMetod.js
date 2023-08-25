// double the price of mobile
const arr = [
    {
        id:1,
        catogary:'electronics',
        type:"mobile",
        name:"samsong",
        price:2000

    },
    {
        id:2,
        catogary:'electronics',
        type:"tv",
        name:"samsong",
        price:1000

    },
    {
        id:3,
        catogary:'electronics',
        type:"mobile",
        name:"mi",
        price:3000

    }
]



const totalprice=(arr)=>{
     const total =arr.filter((element)=>{
            if(element.type=="mobile"){
                return element
            }
     })

     const totalpriceWouldbe = total.reduce((prevElement,curElement)=>{
        return prevElement.price +curElement.price
     })
     return totalpriceWouldbe
}
console.log(totalprice(arr))
// const doubleFunction=(arr)=>{
//     return arr.map((element)=>{
//         if(element.type=="mobile"){
//            return {
//                ...element,
//             //   price: element.price*2
//            }
//         }
   
//    })
  
// }


// console.log(doubleFunction(arr))