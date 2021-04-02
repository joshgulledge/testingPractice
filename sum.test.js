const { TestScheduler } = require('@jest/core');
const sum = require('./sum');

test('should add two numbers together and return the sum', ()=>{
  // this is where the test code should be
  const result = sum(83, 6);

  expect(result).toBe(89);
});

test('should add positive and negative', () => {

  const result = sum(12, -6);

  expect(result).toBe(6);
});

test('should add two negatives', () => {

  const result = sum(-83, -6);

  expect(result).toBe(-89);
});

test('only one argument should fail', () => {
  expect(() => {
    sum(83);
  }).toThrow("You're missing an argument!")
});

test('convert number as a string to number as a number', () => {

  const result = sum("83", "6");

  expect(result).toBe(89);
});