const leapYear = require('./LeapYear');

test('if year is divisible by 4', () => {
  // test code 
  const result = leapYear(1800);

  expect(result).toBe('Fizz');
}); // end test case