class Calculator {
  constructor() {
    this.result = 0;
  }

  static add(num, num2) {
    this.result = num + num2;
    return this.result;
  }

  static subtract(num, num2) {
    this.result = num - num2;
    return this.result;
  }

  static multiply(num, num2) {
    this.result = num * num2;
    return this.result;
  }

  static divide(num, num2) {
    this.result = num / num2;
    return this.result;
  }
}

module.exports = Calculator;
