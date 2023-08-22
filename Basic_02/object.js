//// singleton
//Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Ravindra",
  age: 22,
  loacation: "pali",
  [mySym]: "key1",
  email: "ravindra@gmail.com",
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser["mySym"]);

JsUser.email = "ravindra@gmail.com";
console.log(JsUser);
//Object.freeze(JsUser)

JsUser.email = "ravi@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

console.log(JsUser.greeting());

JsUser.greetingtwo = function () {
  console.log(`Hello JS User ${this.age}`);
};

console.log(JsUser.greetingtwo());

const tinderuser = {};

tinderuser.id = "123ABC";
tinderuser.name = "ravindra";
tinderuser.isLoggedIn = false;

console.log(tinderuser);

const regularUser = {
  email: "somone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "ravindra",
      lastname: "sirvi",
    },
  },
};
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 5: "q", 6: "w" };
const obj3 = { 8: "x", 9: "y" };

const obj4 = { obj1, obj2, obj3 };
console.log(obj4);

console.log(Object.assign({}, obj1, obj2, obj3));

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructure: "Ravindra",
};

const { courseInstructure: instructor } = course;

console.log(instructor);

const navbar = ({ compamy }) => {};

navbar((compamy = "ravindra"));
