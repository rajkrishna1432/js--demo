let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=>33
//"33abc"=>NaN
//true =>1 ; false=>0

let isLoggedIn ="krishna"

let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1=>true ; 0=>false
//""=>false
// "krishna"=>true

let someNumber = 33
let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*******************operations***************//

let value=3
let negValue=-value
console.log(negValue);

// console.log(2**3); //double star is used for power

let str1="krishan"
let str2=" rajbhar"
let str3= str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log((3 + 4) * 5 % 6);

console.log(+true); //this is not good method,but the value is outcome 1

let gameCounter=100
gameCounter++
console.log(gameCounter);

// link to conversion
// https://tc39.es/ecma262/#sec-abstract-operations





