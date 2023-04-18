const jsonStr = '{"greeting": "hello"}';
const aPlainObj = JSON.parse(jsonStr);

console.log(aPlainObj.greeting);

aPlainObj.greeting = "hi";
console.log(aPlainObj.greeting);
console.log(aPlainObj);

const data = {
  firstName: "John",
  lastName: "Doe",
  greeting: "Hello",
};

const aJsonFile = JSON.stringify(data);
console.log(aJsonFile);

function scopeTest() {
  var y = 44;
  console.log(x);
}

var x = 33;
scopeTest();