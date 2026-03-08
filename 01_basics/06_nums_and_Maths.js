const score =400;
console.log(score);


const bal = new Number(100);
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toString());
console.log(bal.toFixed(2));

const n1 = 23.90439;
console.log(n1.toPrecision(5));

const hundreds = 10000000;

console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++ MAths ++++++++++++++++

console.log(Math);

//Object [Math] {}  its a object

console.log(Math.abs(-3));
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.5));
console.log(Math.max(4,5,3,9));
console.log(Math.min(4,8,0,3));

//always comes between 0 - 1
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.random()*10));

const min = 10;
const max = 20;
console.log(Math.random()* (max-min+1));
console.log(Math.floor(Math.random()* (max-min+1)));
console.log(Math.floor(Math.random() * (max-min+1))+min);