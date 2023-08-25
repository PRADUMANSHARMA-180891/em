// let num = 11;

// const primeNumber = (num) => {
//     for (let i = 2; i < num; i++) {
//        if(num%i==0){
//         return `${num} is not a  prime number`;
//        }
//     }
//     return `${num} is a prime number`;
// }

// console.log(primeNumber(num));


// // // print first 100 prime number


// // for (var i=2; i<100; i++){
// //     for(var j=2;j<i;j++){
// //       if(i%j==0){
// //         break;
// //       }
// //     }
// //     if(i==j){
// //        console.log(i);
// //     }
// // }


// for(i=2;i<100;i++){
//   for(j=2;j<i;j++){
//      if(i%j==0)
//      break
//   }
//   if(i==j)
//   console.log(i)
// }



const print100Prime =()=>{
     for(i=2;i<=100;i++){
          for(j=2;j<i;j++){
             if(i % j==0){
                break
             }
          }

          if(i==j){
            console.log(i)
          }
     }
}

print100Prime()