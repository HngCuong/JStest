const fibonacci = require('./sum');

test('fibonancen', () => {
  expect(fibonacci(4)).toBe(5);
});