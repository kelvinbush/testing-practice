const stringLength = require('./string-length.js');
const reverseString = require('./reverse-string.js');
const capitalizeString = require('./capitalize-string.js');

describe('Strings', () => {
  test('stringLength', () => {
    expect(stringLength('Hello'))
      .toBe(5);
  });

  test('less than 1 or more than 10 characters throw error', () => {
    expect(() => {
      stringLength('Hello World');
    })
      .toThrowError(/String must be between 1 and 10 characters long./);
  });

  test('reverseString', () => {
    expect(reverseString('Hello'))
      .toBe('olleH');
  });

  test('capitalizeString', () => {
    expect(capitalizeString('hello world'))
      .toBe('Hello world');
  });
});
