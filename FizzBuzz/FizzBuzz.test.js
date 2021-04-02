const { TestScheduler } = require('@jest/core');
const fizzBuzz = require('./FizzBuzz');

test('number is divisible by 3', () => {
  // test code 
  const result = fizzBuzz(3);

  expect(result).toBe('Fizz');
}); // end test case

test('number is divisible by 5', () => {
  // test code 
  const result = fizzBuzz(5);

  expect(result).toBe('Buzz');
}); // end test case

test('number divisible by 3 and 5', () => {
  // test code 
  const result = fizzBuzz(15);

  expect(result).toBe('FizzBuzz');
}); // end test case

test('number is not divisible by 3 or 5', () => {
  // test code 
  const result = fizzBuzz(7);

  expect(result).toBe(7);
}); // end test case

test('a string is used instead of a number', () => {
  // test code 
  const result = fizzBuzz('6');

  expect(result).toBe('Fizz');
}); // end test case

test('no argument is given', () => {
  // test code 
  expect(() => {
    fizzBuzz();
  }).toThrow("You're missing an argument!")
}); // end test case