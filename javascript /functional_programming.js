let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate= 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

function doubleItem(num) {
  return num * 2;
}

function objectMaker(val) {
  return {
    prop:val
  }
}

let objM = objectMaker(doubleItem(100));
console.log(objM);