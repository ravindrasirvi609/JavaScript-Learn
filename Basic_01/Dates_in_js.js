let mydate = new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toUTCString());
console.log(typeof mydate);



let myCreated = new Date(2023, 0, 5, 5,3)
console.log(myCreated.toUTCString());
console.log(myCreated.getTime());
console.log(Math.floor(Date.now()/1000));


let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(mytimeStamp.toString());


let newDate = new Date();
console.log(Date.now());
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('default', {weekday: "long"}));


