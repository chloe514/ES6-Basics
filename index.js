//Created two arrays of numbers named numbers1 and 2
const numbers1=[1,2,3];
const numbers2=[4,5,6];

//Used the spread operator to create combined array

const numbers=[...numbers1,...numbers2];

//Defined an arrow function called square
const square = num => num*num;

//Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array
const squares=numbers.map(square);

//Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise fa
const isEven = (num) => num % 2 === 0;

//Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.

const evenSquares=squares.filter(isEven);

//Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const [firstEvenSquare, secondEvenSquare] = evenSquares;

//Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`Original numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);  
console.log(`First even square: ${firstEvenSquare}`);