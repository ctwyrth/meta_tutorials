let age = 70;

if (age >= 65) {
  console.log("You get your income from your pension.");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary.");
} else if (age < 18) {
  console.log("You get an allowance.");
} else {
  console.log("The value of the age type is not numerical.");
}


// const foo = () => {
//   console.log("First");
// };

// setTimeout(foo, 0);
// console.log("Second");

// let person = {
//   toString: function () {
//     return "20";
//   },
//   valueOf: function () {
//     return 30
//   }
// };
// console.log(person.toString());
// console.log(person.valueOf());
// console.log(+person);