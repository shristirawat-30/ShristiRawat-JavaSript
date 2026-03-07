let score = "33";
let num = "33aa";  // not a reliable number
let t = null;
let c = undefined;

console.log(typeof score); // string
console.log(typeof num);  // string
console.log(typeof t);  // object
console.log(typeof c);  // undefined

let ValueinNum = Number(score);  // convert successfully
let n = Number(num);  // convert successfully
let temp = Number(t);  // convert successfully
let temp1 = Number(c);  // convert successfully


console.log(typeof ValueinNum);  //Number
console.log(typeof n);    //Number
console.log(typeof temp);    //Number
console.log(typeof temp1);    //Number


console.log(ValueinNum);   //33
console.log(n);   //NaN
console.log(temp);   //0
console.log(temp1);   //NaN