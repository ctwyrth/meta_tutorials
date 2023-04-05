function addTwoNumbers(a, b) {
  return a + b;
}

function subtractTwoNumbers(a, b) {
  return a - b;
}

function multiplyTwoNumbers(a, b) {
  return a * b;
}

function divideTwoNumbers(a, b) {
  return a / b;
}

// console.log(addTwoNumbers(3, 5));
// console.log(subtractTwoNumbers(13, 5));
// console.log(multiplyTwoNumbers(3, 5));
// console.log(divideTwoNumbers(15, 3));

// arrays
let train1 = ["wheat", "barley", "potato", "salt", "rocks"];
console.log(train1);
console.log(train1[0]);

function listArrayItems(arr) {
  arr.forEach((item) => console.log(item));
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);