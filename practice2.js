debugger;

console.log(age); // undefined
var age = 20;
let name = "tri";
const classes = "12a8";
console.log(age); // age = 20

challegen02();

function challegen02() {
  console.log(age); // undefined
  var age = 50;
  console.log(age); // age = 50
}

console.log(age); // age = 20

{
  let name2 = "tri2";
  const classe2s = "12a82";
}
// // execution context
// // creation phase
// // execution phase
