const timesTwo = require('./timesTwo');

// Write the first test
test('should return the number times 2', () => {
  expect(timesTwo(10)).toBe(20);
});