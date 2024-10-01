let dates = new Date()

console.log(dates.toString());
console.log(dates.toDateString());
console.log(dates.toLocaleString());
console.log(dates.toISOString());
// value of date is always given in millisec in js

let createdDate = new Date("2024-01-14")
console.log(createdDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // gives o/p in milisec 
console.log(createdDate.getTime()); // to get date value in millisec
console.log(Math.floor(Date.now()/1000)); // to gets value in sec

let newDate = new Date()

console.log(newDate.getDate() + 1); // months  start from 0 in js

console.log( newDate.toLocaleString('default', {weekday: 'short'}))

