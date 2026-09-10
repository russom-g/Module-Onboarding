const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// Answers

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
//    the substring() method returns the characters starting at index 0(3) up to and excluding the end(9) of penString variable. 
//    This way only 399 is extracted of the string. Then the result is assigned to penceStringWithoutTrailingP variable.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
//    The method padStart(3, "0") adds the string 0 before penceStringWithoutTrailingP only 
