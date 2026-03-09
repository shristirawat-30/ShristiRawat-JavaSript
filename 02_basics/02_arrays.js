const h = ['hi','bye','not good'];
const b = ['why','whom','what'];

//h.push(b); // they do not get merge  (simply add array as new eleemnt)

console.log(h);


// const e = h.concat(b);
// console.log(e);

const e = [...h,...b];
console.log(e);

const d = [1,2,3,[9,0],28,[89,67],90];
console.log(d);
const de = d.flat(Infinity);
console.log(de);
console.log(Array.isArray("hilove"));
console.log(Array.from("hilove"));
console.log(Array.from({name:"shristi"})); //provide empty array we need to specify

let s1 =100;
let s2 =200;
let s3 =300;

console.log(Array.of(s1,s2,s3));