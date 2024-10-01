const accoundId = 67890
let accountName = "abc"
var accountEmail = "abc@gmail.com"
accountBranch = "hill"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accoundId);
console.table([accoundId, accountName, accountEmail, accountBranch, accountState]);

// console.table used for displaying all the variable at onces 
