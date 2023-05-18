const name = "ravindra"
const repocount = 50;

console.log(name+ repocount + " value");
console.log(` my name is ${name} and total repo is ${repocount}`);


const newString = new String('ravi-the-cool-boy');
console.log(newString[0]);
console.log(newString.__proto__);
console.log(newString.length);
console.log(newString.toUpperCase());
console.log(newString.charAt(2));
console.log(newString.indexOf("v"));


const newString2 = newString.substring(0,4)
console.log(newString2);

const anotherString = newString.slice(-2,4)
console.log(anotherString);


const newString32 = "      ravi.    "
const newstringone = newString32.trim()
console.log(newstringone);
console.log(newString32);


const url = "http//ravindra-sirvi/home%20page";
console.log(url.replace('%20',"-"));

console.log(url.includes('ravindra'));
console.log(url.includes('vinita'));

console.log(newString.split("-"));