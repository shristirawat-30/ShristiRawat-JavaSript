const score =400; //primtive
console.log(score);


const bal = new Number(100); //Number Object
console.log(bal); //Wraps number into objects using methods

console.log(bal.toString().length);
console.log(bal.toString());
console.log(bal.toFixed(2)); //formats a number to fixed decimal places

const n1 = 23.90439;
console.log(n1.toPrecision(5)); // controls total digits

const hundreds = 10000000;

console.log(hundreds.toLocaleString('en-IN')); //region format


//++++++++++++++++++++ MAths ++++++++++++++++

console.log(Math);

//Object [Math] {}  its a object

console.log(Math.abs(-3)); //remove negative value 
console.log(Math.round(4.6)); //>=4.5 then 5 
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