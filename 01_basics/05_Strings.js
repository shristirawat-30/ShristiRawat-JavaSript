const name = "Shristi";

const no = 20;

console.log(name+no);


//back ticks

console.log(`Hello my name is ${name} and count is${no}`);

console.log(typeof("hi"));

const n = new String("holiday");
console.log(typeof(n));

console.log(n[0]);
console.log(n.__proto__);

console.log(n.length);
console.log(n.toUpperCase());
console.log(n);
console.log(n.charAt(2));
console.log(n.indexOf('d'));

const newString = n.substring(0,4);
console.log(newString);

//we can provide negative value to the slice
const another = n.slice(-5,4);
console.log(another);


const newStr = "   hitesh     ";
console.log(newStr);
console.log(newStr.trim());

const url = "rawatshristi4&gmail.com";
console.log(url.replace('&','@'));

console.log(url.includes('shristi'));
console.log(url.includes('shitu'));

const v = new String('Shristi-Rawat-good-girl');

console.log(v.split('-'));