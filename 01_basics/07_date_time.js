//Dates

let myDate = new Date();
console.log(myDate);
console.log(typeof(myDate));
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// let d = new Date(2026,0,7);
let d = new Date("2026-04-08");
// let d = new Date("2026-04-08");
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toDateString());

// let myTimeStamp = Date.now(); //in mili second
// console.log(myTimeStamp);

// console.log(d.getTime());

//console.log(Math.floor(Date.now()/1000));

let dt = new Date();
console.log(dt);
console.log(dt.getDate());
console.log(dt.getMonth());
console.log(dt.getDay());
console.log(dt.getFullYear());

dt.toLocaleString('default',{
    weekday: "long"
}

)