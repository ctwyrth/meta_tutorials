// Task 1: Code a Person Class
class Person {
  consturctor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker Class
class Worker extends Person {
  constructor(xp, hourlyWage, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  let intern = new Worker(0, 10, "Bob", 21, 110);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  let manager = new Worker(100, 30, "Alice", 30, 120);
  manager.doSomethingFun();
  return manager;
}

console.log(intern());
console.log(manager());

class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = 'meow';
  }
}

let result = new Animal();
console.log(result.noise);