let a = 20;
let b = 10;
function add(val1, val2) {
  let total = val1 + val2;
  console.log(total);
  return total;
}

function substract(val1, val2) {
  let res = val1 - val2;
  //   console.log(res);
  return res;
}

function whatIsMyGrade(marks) {
  if (marks > 80) {
    console.log("you got HD");
  } else if (marks < 40) {
    console.log("sorry you failed");
  }
}

let score = 89;
let msg = whatIsMyGrade(score);

// let c = a + b;
let c = add(a, b);
// let c = add(10, 20);
console.log(c);

c = subtract(a);
console.log(c);

c = subtract(140, 56);
// console.log(c);

// c = 40 + 56;
c = add(40, 56);
console.log(c);

a = 45;
b = 6;
c = a + b;
console.log(c);
