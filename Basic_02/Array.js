// Array

const myArray = [0, 2, 4, 6, 7, 1];
const myHeroes = ["saktiman", " hatim", "ram"];
const myArray2 = new Array(2, 4, 5, 6, 7, 8);

console.log(myArray[0]);
console.log(myArray);
console.log(myHeroes);
console.log(myArray2);

// Array Methos

console.log(myArray.push(99));
console.log(myArray);

console.log(myArray.pop());
console.log(myArray);

console.log(myArray.unshift(100));
console.log(myArray);

console.log(myArray.shift());
console.log(myArray);

console.log(myArray.includes(4));
console.log(myArray.indexOf(4));

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

const newArr = myArray.join();
console.log(myArray);
console.log(typeof myArray);
console.log(newArr);
console.log(typeof newArr);

/// Slice and splice

console.log("A", myArray);

console.log("B", myArray.slice(0, 3));

console.log("c", myArray.splice(0, 3));
console.log(myArray);

const cricket = ["jaiswal", "dhoni", "rohit", "virat"];
const football = ["ronaldo", "massi", "chetri"];

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(cricket.push(football));
//console.log(cricket.concat(football));
const sports = cricket.concat(football);
console.log("sports ====", sports);

const allSports = [...cricket, ...football];
console.log(allSports);

const AnotherArray = [2, 3, 4, [5, 6, 7], 4, 5, [4, 6, 2, [3, 5, 6]]];
console.log(AnotherArray);
const realarray = AnotherArray.flat(Infinity);
console.log(realarray);

console.log(Array.isArray("ravindra"));
console.log(Array.from("Ravindra"));
console.log(Array.from({ name: "ravindra" })); // intresting Case

let score1 = 34;
let score2 = 33;
let score3 = 74;
let score4 = 64;

console.log(Array.of(score1, score2, score3, score4));
