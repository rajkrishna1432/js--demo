// Primitive (call by value)

// 7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt
 
const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id=== anotherid);

const bigNumber = 234567823456n
const heros = ["Shaktiman","Iron Man","thor"];

let myObj={
    name:"krishna",
    age:20
}

const myFunction = function(){
    console.log("hello");
    
}
//NonPrimitive(refrence)
//Array,Objects,Function