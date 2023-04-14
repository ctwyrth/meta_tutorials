let bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
}

let eagle1 = Object.create(bird);

console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);

let eagle2 = Object.create(bird);

let penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1:", penguin1);
console.log("penguin1 can fly:", penguin1.canFly);
console.log("penguin1 has feathers:", penguin1.hasFeathers);