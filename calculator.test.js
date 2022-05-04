const calculator = require('./calculator.js');

describe('Calculator', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(calculator.add(1, 2))
        .toBe(3);
    });
  });
  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(calculator.subtract(2, 1))
        .toBe(1);
    });
  });
  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(calculator.multiply(2, 2))
        .toBe(4);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(calculator.divide(4, 2))
        .toBe(2);
    });
  });
});
