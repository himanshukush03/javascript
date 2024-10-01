const num = new Number(1000)
console.log(num);

console.log(num.toString().length);
console.log(num.toFixed(2));   // 1000.00

const num2 = 1230000.7865
console.log(num2.toPrecision(3));
console.log(num2.toLocaleString('en-IN'));


console.log(Math);
console.log(Math.random()); // output remain in range between 0,1 default
console.log((Math.random()*10) + 1); // to define the range for random
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 30
console.log((Math.floor(Math.random() * (max - min + 1 ))))
// if min and max (range) is given then we can use min max formula and floor for rounding of the value to lower case to get single value


