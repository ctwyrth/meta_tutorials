function addTwoNumbers(a, b) {
  try {
    if (typeof(a) != 'number') {
      throw new ReferenceError("The first argument is not a valid number.");
    } else if (typeof(b) != 'number') {
      throw new ReferenceError("The second argument is not a valid number.");
    } else {
      console.log(a + b);
    }
  }
  catch(err) {
    console.log("Error!", err);
  }
}

addTwoNumbers(5, "5");
console.log("It still works.");
