function letterFinder(word, match) {
  let condition1 = typeof(word) == 'string' && word.length >= 2;
  let condition2 = typeof(match) == 'string' && match.length == 1;

  if (condition1 == true && condition2 == true) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log(`Found the ${match} at ${i}`);
      } else {
        console.log(`---No match found at ${i}`);
      }
    }
  } else {
    console.log("Please pass correct arguments to the function.");
  }
}

// letterFinder(5, 55);
// letterFinder("cat", "c");

// throw new Error();
// console.log("Hello");

// var str = "hello";
// console.log(str.match("jello"));

function testFunc() {
  try {
    Number(5).toPrecision(300);
  } catch(err) {
    console.log("There was an error");
    console.log(err);
  }
}

testFunc();