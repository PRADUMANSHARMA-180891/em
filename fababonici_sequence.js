

let num1 = 0;
let num2 = 1;

const findFabonanic =()=>{
   for(i=0; i<=10; i++){
      let temp= num1+num2; //temp=0+1=1

      num1=num2; //num1 =1
      num2=temp; //num2 =1

      console.log(temp)
   }

   
}

findFabonanic();

// fabonici Number = 0,1,2,3,5,8,13,21,34,55,...

let firstNum = 0;
let secondNum = 1;
 
const findFabonanic1 =()=>{
   for(i=0;i<=8;i++){
      var thirdNum = firstNum + secondNum;
      firstNum = secondNum
      secondNum =thirdNum

   }
    return thirdNum
}

console.log(findFabonanic1())