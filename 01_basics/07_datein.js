let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let myNewDate=new Date(2023,0,23,5,3)
// console.log(myNewDate.toLocaleString());

// let myCreatedDate=new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate=new Date("01-14-2023")
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // in javascript month count from the '0'
console.log(newDate.getDay());

newDate.toLocaleString('default',{//for the parameter and object fromat
    weekday:"long",
})

