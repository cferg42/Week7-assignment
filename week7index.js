console.log(`-------------------------- 
  Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.`);

// Create the ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element
//length - 1 is how you access the last element and ages{0} is the first element
let difference = ages[ages.length - 1] - ages[0];
console.log(difference); // Output: 90

// Add a new age to the array
// push adds more elements to end of array - so 40 is now the last element
ages.push(40);

// Subtract the first element from the new last element
// 40 is now the last array minus the fiirst element which is still 3
difference = ages[ages.length - 1] - ages[0];
console.log(difference); // Output: 37

// Calculate the average age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge); // Output: Average of all the ages

console.log(`-------------------------- 
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);

// Create the names array
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters); // Output: Average number of letters per name

// Concatenate all the names together, separated by spaces
let allNames = "";
for (let i = 0; i < names.length; i++) {
  allNames += names[i] + " ";
}
console.log(allNames); // Output: "Sam Tommy Tim Sally Buck Bob"

console.log(`-------------------------- 
Question 3: How do you access the last element of any array? `);

// Access the last element of any array
let lastElement = names[names.length - 1];
console.log(lastElement); // Output: "Bob"

console.log(`-------------------------- 
Question 4: How do you access the first element of any array?`);

// Access the first element of any array
let firstElement = names[0];
console.log(firstElement); // Output: "Sam"

console.log(`-------------------------- 
  Question 5: Create a new array called nameLengths. Write a loop to 
  iterate over the previously created names array and add the length 
  of each name to the nameLengths array.

For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array`);

// Create an array called names with some names
let names1 = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Create an empty array called nameLengths
let nameLengths1 = [];

// Use a loop to iterate over the names array
for (let i = 0; i < names.length; i++) {
  // Add the length of each name to the nameLengths array
  nameLengths1.push(names[i].length);
}

// Print to see the result
console.log(nameLengths1); // Output: [3, 5, 3, 5, 4, 3]

console.log(`-------------------------- 
  Question 6:Write a loop to iterate over the nameLengths array and 
  calculate the sum of all the elements in the array.`);

let nameLengths = [5, 3, 4]; // The array of name lengths
let sum1 = 0; // Variable to store the sum

// Iterate over the nameLengths array and add each element to sum
for (let i = 0; i < nameLengths.length; i++) {
  sum1 += nameLengths[i];
}

console.log(sum1); // Output: 12
// This code loops through the nameLengths array and adds each element to the sum
// variable. The final output will be 12, which is the sum of [5, 3, 4].

console.log(`-------------------------- 
  Question 7: Write a function that takes two parameters, word and n, as arguments and 
  returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello'
   and 3, I would expect the function to return 'HelloHelloHello').`);

function repeatWord(word, n) {
  let result = ""; // Variable to store the concatenated result
  for (let i = 0; i < n; i++) {
    result += word; // Concatenate the word to the result n times
  }
  return result;
}
// In this function, the repeatWord function loops n times, concatenating the word to
// the result on each iteration. The final result is returned after the loop finishes.
// Example: if you pass 'Hello' and 3, it will return 'HelloHelloHello'.

console.log(repeatWord("Hello", 3)); // Output: HelloHelloHello

console.log(`-------------------------- 
  Question 8: Write a function that takes two parameters, firstName and lastName, and 
  returns a full name. The full name should be the first and the last name separated 
  by a space.`);

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
  // Concatenate firstName and lastName with a space in between
}

console.log(getFullName("Barry", "Sanders")); // Output: "Barry Sanders"

console.log(`-------------------------- 
  Question 9: Write a function that takes an array of numbers and returns true if the
  sum of all the numbers in the array is greater than 100. `);

function isSumGreaterThan100(numbers) {
  let sum = 0; // variable to store the sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Add each number in the array to the sum
  }
  return sum > 100; // Return true if the sum is greater than 100
}
// function iterates through the array, calculates the sum, and returns true if
// the sum is greater than 100, otherwise it returns false. Example: [50, 60, 10]
// gives true, since the sum is 120.
console.log(isSumGreaterThan100([10, 20, 30, 40, 5])); // Output: true
console.log(isSumGreaterThan100([50, 60, 10])); // Output: true

console.log(`-------------------------- 
  Question 10: Write a function that takes an array of numbers and returns the average
  of all the elements in the array `);

function getAverage(numbers) {
  let sum = 0; // Initialize a variable to store the sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Add each number in the array to the sum
  }
  return sum / numbers.length; // Calculate the average by dividing the sum by the array length
}
// This function sums all the numbers in the array then divides the sum by
// the number of elements in the array to get the average.
// For example, [10, 20, 30, 40, 50] gives an average of 30.
console.log(getAverage([10, 20, 30, 40, 50])); // Output: 30
console.log(getAverage([5, 10, 15])); // Output: 10

console.log(`-------------------------- 
  Question 11:Write a function that takes two arrays of numbers and returns true if 
  the average of the elements in the first array is greater than the average of the 
  elements in the second array.`);

function compareAverages(array1, array2) {
  // Helper function to calculate the average of an array
  function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

  // Calculate the averages for both arrays
  const avg1 = getAverage(array1);
  const avg2 = getAverage(array2);

  // Compare the averages
  return avg1 > avg2;
}
// In this function:
// The getAverage helper function calculates the average of a given array.
// The compareAverages function puts out the averages of both input arrays and returns
// true if the average of the first array is greater than the average of the second
// array, if not it returns false.
// For example, [10, 20, 30] and [5, 10, 15] returns true since the first arrays average
// is 20, which is greater than the second arrays average of 10.
console.log(compareAverages([10, 20, 30], [5, 10, 15])); // Output: true
console.log(compareAverages([1, 2, 3], [4, 5, 6])); // Output: false

console.log(`-------------------------- 
  Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside,
   and a number moneyInPocket, and returns true if it is hot outside and if 
   moneyInPocket is greater than 10.50.`);

function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5;
}
// Breakdown:
// The function takes two parameters: isHotOutside (boolean) and moneyInPocket
// (number).
// It returns true if both conditions are met: it is hot outside (isHotOutside === true)
// and you have more than $10.50 in your pocket.

console.log(willBuyDrink(true, 15.0)); // Output: true
console.log(willBuyDrink(true, 8.0)); // Output: false
console.log(willBuyDrink(false, 20.0)); // Output: false

console.log(`-------------------------- 
  Question 13:Create a function of your own that solves a problem. In comments, 
  write what the function does and why you created it.`);

// Function calculates the total cost of items with tax
// I created this function because I often need to know how much I'll pay for something after tax is added.

function calculateTotalCost(price, taxRate) {
  // Calculate the tax amount by multiplying the price by the tax rate
  let taxAmount = price * taxRate;

  // Calculate the total cost by adding the tax amount to the original price
  let totalCost = price + taxAmount;

  // Return the total cost
  return totalCost;
}

// Example usage:
let price = 100; // price of an item
let taxRate = 0.08; // 8% tax rate

console.log(calculateTotalCost(price, taxRate)); // Expected output: 108

// Function helps you calculate how much something will cost after tax is applied,
// which is useful when shopping or budgeting.
