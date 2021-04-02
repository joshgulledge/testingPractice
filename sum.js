
// Adds two numbers together and return the sun

function sum (numberOne, numberTwo) {

  if(numberOne === undefined || numberTwo === undefined) {
    throw new Error("You're missing an argument!")
  };
  
  return Number(numberOne) + Number(numberTwo);
}; // end sum

module.exports = sum;