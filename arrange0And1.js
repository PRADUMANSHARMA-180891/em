let arr=[1,0,0,1,1,0];  
//output = [0,0,0,1,1,1]
let count=0;
const sort0And1=(arr)=>{
    for(i=0;i<arr.length;i++){
      if(arr[i]===0){
       count++
      }
    }

    for(let i=0;i<count;i++){
       arr[i]=0
    }

    for(let i=count;i<arr.length;i++){
        arr[i]=1
     }
    return arr
}

console.log(sort0And1(arr))


