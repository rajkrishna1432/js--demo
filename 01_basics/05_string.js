const name="krishna"
const repoCount=50

// console.log(name + repoCount);


console.log(`the number is ${name} and the repo is ${repoCount}`);

const gameName=new String("krishna")//this is the way of initialization of the string
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-6,4)//negative will used in only slice
console.log(anotherString);

const newStringOne="   krishna   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="http://krishna.com/krishna%20rajbhar"
console.log(url.replace('%20','-'));//for replacing%20 and -add
console.log(url.includes("krishna"));//this is the checking for the name is present or not in boolean form












