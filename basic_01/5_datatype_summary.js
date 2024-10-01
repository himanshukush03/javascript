// # primitive type ( stored in stack => gives the copy of variable, object)
/* 
7 types :
String, Number, Boolean, null, undefine, symbol, BigInt(larger number)


Refernce (non primtive)  ( stored in heap => gives the original value of refenece )
Array, object, function



is js is static or dynamic?

*/

const id = Symbol('123')
const empid = Symbol('123')
// its create unique  value
 const bigNum = 2384902170083n
// BigNumber decleration


//        stack memory location example => generate the copy of varaiable 

let userName = " abc"
let userName2 = userName
userName2 = "hlj"
console.log(userName);
console.log(userName2);
// nhere the output will be same  and if i chance the value of userName2 then also userName  value will not change



//  heap memory allocation =>   it  points or give refence to same copy for all the alocation


let user1 ={
    name : "opiu",
    email: "user1@gmail.com"
}
console.log(user1);

let user2 = user1

user2.email = "qwe@gmail.com"
console.log(user1);
console.log(user2);
/* 
the value of email will be change for both the user 1 and user2  as it shares the original copy of refence
*/


 