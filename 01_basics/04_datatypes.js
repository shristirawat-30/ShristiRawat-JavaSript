// Primitive 

/*
7 types -->
Number
String
Boolean
Symbol
Undefined
Null
BigInt

*/ 
const id = Symbol('1234');
const Numid = Symbol('1234');

console.log(id == Numid);
console.log(id === Numid);

//Non - Primitive (Call by reference)
/*
object
Array
functions
*/

const heroes  = ["shaktiman","naagraj","doga"];
let obj = {
    name:"shitu",
    age: 21

}

const myFunction = function(){
    console.log("Hello world");
}

myFunction();
console.log("10" + 5);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack ( Primitive) , Heap ( Non - Primitive)

//Primitive 

let name = "shristi";

let n = name;

n = "rawat";

console.log(name);
console.log(n);

// we always gives the copy


let userOne = {
    username:"rawatshristi@gmail.com",
    pass:1234
}

let userTwo = userOne;

console.log(userOne.username);
userTwo.username = "rawat@gmail.com";

console.log(userOne.username);
console.log(userTwo.username);

//It will get changed ok 


