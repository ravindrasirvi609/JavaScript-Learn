const obj = {
    name :'ravindra',
    age : 23,


    welcomeMessage : function(){
        return ` yeh tho ${this.name} hu`

    }
}
console.log(obj.welcomeMessage());

console.log(this);

const fun = function(num1, num2){
    return num1+num2;
}

const fun1 = (num1 , num2)=> num1+num2

const fun2 = (num1 , num2)=> (num1+num2)

console.log(fun(2,4));
console.log(fun1(3,4));
console.log(fun2(4,5));