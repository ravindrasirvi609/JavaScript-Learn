// primitive data type

// type ==7 > String, Number, Boolean , null, undefined, Symbol, BigInt

const name = "Ravindra Choudhary";

let numberA = Symbol("123");
let numberB = Symbol("123");
console.log(numberA == numberB);

// Reference Type/ Non-Primitive

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "hatim"];

let Obj = {
  name: "ravindra",
  age: 23,
};

const myfunc = function () {
  console.log("hello World ");
};

console.log(typeof heros);

/// Memory in JavaScript

console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeChenal = "ravindra";
let anotherchenal = myYoutubeChenal;
anotherchenal = "sirvi";
console.log(anotherchenal);
console.log(myYoutubeChenal);

let myObj = {
  name: "ravindra",
  Company: "XYZ.COM",
};

console.log(myObj.name);
myObj.name = "sirviavindra";
console.log(myObj.name);
