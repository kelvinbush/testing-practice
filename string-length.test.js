const stringLength = require('./string-length.js');

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
