
// array in js is resizable 
// array create a shallow copy(refer same copy for all operation, object s) in array if we perform copy operation on array
// as well as deep copy( create diff copy, doesnt affect the other copy of it)

const arr = [2,5,7,4,3]

// const arry2 = new Array(1,3,4,6)
// console.log(arry2[2]);

//array method 
arr.push(8)
arr.pop(8)
// console.log(arr);

arr.unshift(9)  // add the value in start of arr and shift the value by 1
arr.shift()  // shift 
// console.log(arr);

// const newarr = arr.join()
// console.log(typeof newarr);


//slice , splice

console.log("A: Org", arr);
const ma1 = arr.slice(1,3)
console.log("after slice value of array: ", ma1);

console.log("B: org" , arr);

const mb1 = arr.splice(1,3)
console.log("after splice value of array: ", mb1);
console.log("c: org", arr);

/*
A: Org [ 2, 5, 7, 4, 3 ]
after slice value of array:  [ 5, 7 ] // it doesnt affect the orginal array
B: org [ 2, 5, 7, 4, 3 ]
after splice value of array:  [ 5, 7, 4 ]  // it modify the org array and remove the value from range of index from org array
c: org [ 2, 3 ]  
*/




