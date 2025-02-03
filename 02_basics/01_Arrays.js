const myArray=[0,1,2,3,4,5]
const myHero=["shaktiman","IronMan","Captain"]
const myArray2=new Array(1,2,3,4,5)
console.log(myArray[0]);

myArray.push(6)
myArray.pop()//it remove the last element without giving any argument
myArray.unshift(9)//add the 9 in begining
myArray.shift()//remove the element from begining

console.log(myArray);
console.log(myArray.includes(9));//giving the answer in the boolean form
console.log(myArray.indexOf(3));

const newArray=myArray.join()// It convert into the string form 'join'
console.log(myArray);
console.log(newArray);

console.log("A",myArray);
const myn1=myArray.slice(1,3) //it print the range except lastone like 1 to 2 not 3
console.log(myn1);
console.log("B",myArray);

const myn2=myArray.splice(1,3) // It remove the given range from 1 to 3
console.log(myn2);
console.log("C",myArray);









