const myarr=[1,2,3,4,5];

const ar = new Array(1,2,3,9);

console.log(myarr);
console.log(ar);

console.log(myarr[0]);

//array methods

myarr.push(8);
console.log(myarr);

myarr.pop();

console.log(myarr);

ar.unshift(100);
console.log(ar);
ar.shift();
console.log(ar);

console.log(myarr.includes(4));
console.log(myarr.indexOf(4));

const a = myarr.join();

console.log(a);
console.log(typeof a);

//slice , splice

console.log("A",myarr);

console.log(myarr.slice(1,3));

console.log("B",myarr);
console.log(myarr.splice(1,3));
console.log("C",myarr);
