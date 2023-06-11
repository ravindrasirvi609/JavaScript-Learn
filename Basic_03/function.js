function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("R");
    console.log("A");
}

sayMyName();

function twoNumberAdd(num1, num2) {
    console.log(num1 + num2);
}

twoNumberAdd(2,3);
twoNumberAdd(2,'a');
twoNumberAdd(2,null);
twoNumberAdd(2,null);
twoNumberAdd('a',5);
twoNumberAdd('5',5);
twoNumberAdd(5,'4');
console.log("------------------------------------------------------");



function logginguserName(username){
    if (username === undefined) {
        return "Please write your proper User name"
    }
    return `${username} ! i am there `

}
//console.log(logginguserName());

console.log(logginguserName("ravindra"));


function countvalues(num4){
    return num4;

}

console.log(countvalues(3));

function countallvalues(...num4){
    return num4;

}

console.log(countallvalues(3,5,6,7));

const arr = [3,5,6,7];
function testarr(getarray) {
    return getarray[2];
    
}

console.log(testarr(arr));

const user ={
    namr: "ravindra",
    age: "32"
}
function objtest(anyojb){
    console.log(`this is ${anyojb.namr} and my age is ${anyojb.age}`);

}

objtest(user);

// declaration in function 

function addSum(num){
    return 3+num;
}

const addSum2 = function(num){
    return 3+num
}

console.log(addSum(2));
console.log(addSum2(2));