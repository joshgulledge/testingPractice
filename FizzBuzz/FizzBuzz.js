/*
  if number is divisible by 3, return Fizz
  if number is divisible by 5, return Buzz
  if number is divisible by 3 and 5, return fizzbuzz
*/

const fizzBuzz = function (num) {

  if (num === undefined) {
    throw new Error ("You're missing an argument!");
  };

  if ((num % 3) === 0 && (num % 5) === 0) return 'FizzBuzz';
  if((num % 3) === 0 ) return 'Fizz';
  if ((num % 5) === 0 )return 'Buzz';

  return num;
}; // end fizzBuzz

module.exports = fizzBuzz;
