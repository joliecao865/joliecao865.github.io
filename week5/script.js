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

//if conditions
let grade = 45;
if (grade > 70) {
  console.log("Hey you got a HD");
} else {
  console.log("You just passed the course");
}

// numerical variables 0-9
let b = 10;
let c = 20;
let d = b + c;
console.log(d);
// + addition - substraction * multiplication / division

// string variable text '' "" `` back tick
let yourName = "Rohit Ashok Khot";
console.log("hello", yourName);
let yourCity = "melbourne";
if (yourCity === "perth") {
  console.log("you are from perth");
} else {
  console.log("you are not from perth");
}
let msg = `<h1> I Live in ${yourCity} </h1>

<p> hello this is ${yourName} </p>  `;
console.log(msg);
// console.log("hello", yourName + yourCity);

//boolean variable
let isItSunday = false;
let isOART1013 = true;

//object variables;
const myStudentRecord = {
  name: "Rohit",
  id: 1234,
  homeTown: "Melbourne",
  isLocal: false,
};
console.log(myStudentRecord);
console.log(myStudentRecord.homeTown);

//arrays array start at 0
let student1 = "Rohit";
let student2 = "John";
let student3 = "Melisaa";
let students = ["Rohit", "John", "Lucy", "Sarah", "Sam", "Alice"];
console.log(students);
console.log(students[2]);
// number starts from 0 - so Rohit is 0 and 2 is Lucy

for (let i = 0; i < students.length; i++) {
  console.log("HELLO", students[i]);
}

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4
  console.log("Taking step no:", step);
}
