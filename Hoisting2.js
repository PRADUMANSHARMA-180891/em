hoisted=8;
console.log(hoisted);

var hoisted
//let hoisted  give error

// usin function

function hoisting(){
   x=10
   console.log(x)
   var x
}
hoisting()

//

var y;
console.log(y);   // Outputs "undefined" since the initialization of "x" is not hoisted
y=20   

// to avoid hoisting
"use strict";
z=30;
console.log(z);
var z  

