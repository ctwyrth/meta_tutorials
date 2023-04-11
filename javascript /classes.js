class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log("Turbo is on!");
  }
}

let corvette = new Car('red', 185);

console.log(corvette);
corvette.turboOn();
