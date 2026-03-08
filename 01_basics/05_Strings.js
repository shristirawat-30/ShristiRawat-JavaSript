const name = "Shristi";

const no = 20;

console.log(name+no); // 20 become "20" which i astring implicit type conversion ok



//back ticks  (template literals)

console.log(`Hello my name is ${name} and count is${no}`);

console.log(typeof("hi"));

const n = new String("holiday");  //creating string object 
console.log(typeof(n));

console.log(n[0]);
console.log(n.__proto__); // it shows prototype object of strings (simply having all the built-in functions)

console.log(n.length);
console.log(n.toUpperCase()); // does not modify original string
console.log(n); //Strings in javaSript are immutable 
console.log(n.charAt(2)); // acharcter at specific pos
console.log(n.indexOf('d')); // first occurence pos of the character

const newString = n.substring(0,4); //(start,end) (include,exclude)
console.log(newString);

//we can provide negative value to the slice
const another = n.slice(-5,4);
console.log(another);


const newStr = "   hitesh     ";
console.log(newStr);
console.log(newStr.trim()); //trims spaces before and after text

const url = "rawatshristi4&gmail.com";
console.log(url.replace('&','@'));

console.log(url.includes('shristi'));
console.log(url.includes('shitu'));

const v = new String('Shristi-Rawat-good-girl');

console.log(v.split('-'));