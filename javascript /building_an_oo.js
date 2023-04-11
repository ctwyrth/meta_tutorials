class Animal {
  constructor(color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
  }

  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy decreasaed, currently:", this.energy);
    } else if (this.energy <= 0) {
      this.sleep();
    }
  }

  sleep() {
    this.energy += 20;
    console.log("Sleeping... energy increase to:", this.energy);
  }

  getColor() {
    console.log("Color:", this.color);
  }
}

class Cat extends Animal {
  constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(houseCatSound = 'meow', sound, canJumpHigh, canClimbTrees, color, energy) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }

  makeSound(catCheck) {
    if (catCheck) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(tigerSound = 'ROAR', sound, canJumpHigh, canClimbTrees, color, energy) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }

  makeSound(catCheck) {
    if (catCheck) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }

  makeSound(birdCheck) {
    if (birdCheck) {
      super.makeSound();
    }
    
    if (this.canTalk) {
      console.log("Polly wants a cracker!");
    }
  }
}

let polly = new Parrot(true);
let fiji = new Parrot(false, 'caw', true, 'blue', 80);
polly.makeSound(true);
console.log("-------------");
fiji.makeSound(true);
console.log("-------------");
polly.getColor();
console.log(polly.energy);
console.log("-------------");

let penguin = new Bird('shriek', false, "black and white", 200);
console.log(penguin);
console.log("-------------");
console.log(penguin.sound);
console.log(penguin.canFly);
penguin.getColor();
console.log(penguin.energy);
console.log("-------------");
penguin.isActive();
console.log("-------------");

let leo = new HouseCat();
leo.makeSound(false);
console.log("-------------");
leo.makeSound(true);
console.log("-------------");

let cuddles = new Tiger();
cuddles.color = "orange, white and black stripes";
cuddles.getColor();
console.log("-------------");
cuddles.makeSound(false);
console.log("-------------");
cuddles.makeSound(true);
console.log("-------------");