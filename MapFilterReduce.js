// map = its arrey method to itarete element and give new arrey 

const nums=[1,2,3,4]

const num=nums.map((curent_value,index,arrey)=>{
      return curent_value*2
    //   return index
    //   return arrey
})


console.log(num)

// filter = it apply on arrey with condition, if condition is true then its going to return new arrey

const myAge=[12,4,54,34,2]

const canVote=myAge.filter((age,index,aar)=>{
    return age >18
})

console.log(canVote)

//reduce = reduce method down just of an arrey
//accumulater= its result of preveis computation

const total=[1,2,3,4];
const sum=total.reduce((previos_value,current_value,index,arrey)=>{
      return previos_value +current_value
},0);

console.log(sum);