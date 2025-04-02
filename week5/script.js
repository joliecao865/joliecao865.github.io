console.log("Hello");
console.log("how are you buddy?");

// javascript, above is telling them to print those sentences
// comments are to document and explain the logic of your code

let myName = "Rohit";
console.log("Hello", myName);
myName = "Sarah";
console.log("Hello", myName);
let id = "s1234567";
console.log("My id is", id);

let myCity = prompt("Where do you live?");
console.log("I live in", myCity);
// this is to ask the user and the user put in the info

let a = 30;
{
  let a = 10;
  console.log("value of a is", a);
}
console.log("value of a is", a);

// numerical variables 0-9
let b = 10;
let c = 20;
let d = b + c;
console.log(d);
// + addition - substraction * multiplication / division

// string variable text '' "" `` back tick
let yourName = "Rohit Ashok Khot";
console.log("hello", yourName);

//boolean variable
let isItSunday = false;
let isOART1013 = true;

//object variables;
const myStudentRecord = {
  name: "Rohit",
  id: 1234,
  hometown: "Melbourne",
  isLocal: false,
};
console.log(myStudentRecord);
console.log(myStudentRecord.hometown);
