class WithDefaultParameters {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }

  calculate() {
    if(this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }

    return "the value of bool1 is incorrect!";
  }
}

let better = new WithDefaultParameters();
better.calculate();

let fail = new WithDefaultParameters(2, 3, "test:", false);
fail.calculate();