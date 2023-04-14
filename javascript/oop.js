const shoes = 100;
const stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax;
}

let toPay = totalPrice(shoes, stateTax);

console.log(toPay);

const purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function() {
    let calculation = this.shoes * this.stateTax;
    console.log('Total price:', calculation);
  }
}
purchase1.totalPrice();

const purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function() {
    let calculation = this.shoes * this.stateTax;
    console.log('Total price:', calculation);
  }
}
purchase2.totalPrice();
