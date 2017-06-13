
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
var newString = "";
var numberToString = function(n){
  if(typeof n === "number"){
    newString = n.toString();
    return newString;
  }
};
numberToString(2);
console.log(newString);

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

var increase = function(n){
  if(typeof n === "number"){
    n++;
    return n;
  }
};
console.log(increase(5));

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
var decrease = function(n){
  if(typeof n === "number"){
    n--;
    return n;
  }
};
console.log(decrease(9));

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
var sum = 0;
var add = function(x, y){
  if(typeof x === "number" && typeof y === "number"){
  sum = x + y;
  return sum;
}
};
add(9,20);
console.log(sum);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
var difference = 0;
var subtract = function(x, y){
  if(typeof x === "number" && typeof y === "number"){
  difference = x - y;
  return difference;
}
};
subtract(17,5);
console.log(difference);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
var product = 0;
var multiply = function(x,y){
  if(typeof x === "number" && typeof y === "number"){
  product = x * y;
  return product;
}
};
multiply(2,5);
console.log(product);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
var quotient = 0;
var divide = function(x,y){
  if(typeof x === "number" && typeof y === "number"){
    quotient = x/y;
    return quotient;
  }
};
divide(8,2);
console.log(quotient);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
var squared = 0;
var square = function(x){
  if(typeof x === "number"){
    squared = x*x;
    return squared;
  }
};
square(5);
console.log(squared);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
var result = 0;
var calculate = function(operation, x, y){
  if(typeof x === "number" && typeof y === "number"){
    if (operation.toLowerCase() === "add"){
      result = x + y;
      console.log(x + " + " + y + " = " + result);
      return result;
    }else if(operation.toLowerCase() === "subtract"){
      result = x - y;
      console.log(x + " - " + y + " = " + result);
      return result;
    }else if(operation.toLowerCase() === "multiply"){
      result = x * y;
      console.log(x + " x " + y + " = " + result);
      return result;
    }else if(operation.toLowerCase() === "divide"){
      result = x/y;
      console.log(x + " / " + y + " = " + result);
      return result;
    }
  }
};
calculate("subtract", 7, 3);
calculate("divide", 4, 2);
calculate("multiply", 2, 3);
calculate("add", 4, 7);
console.log(result);

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
var isLargerThan;
var isGreaterThan = function(a, b){
  if(typeof a === "number" && typeof b === "number"){
    if(a>b){
      isLargerThan = true;
      return isLargerThan;
    }else{
      isLargerThan = false;
      return isLargerThan;
    }
  }
};
isGreaterThan(9,3);
console.log(isLargerThan);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
var isSmallerThan;
var isLessThan = function(a, b){
  if(typeof a === "number" && typeof b ==="number"){
    if(a<b){
      isSmallerThan = true;
      return isSmallerThan;
    }else{
      isSmallerThan = false;
      return isSmallerThan;
    }
  }
};
isLessThan(4,19);
console.log(isSmallerThan);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
var numbersAreEqual;
var areEqual = function(a,b){
  if(typeof a === "number" && typeof b === "number"){
    if(a===b){
      numbersAreEqual = true;
      return numbersAreEqual;
    }
  }else{
    numbersAreEqual = false;
    return numbersAreEqual;
  }
};
areEqual(2,2);
areEqual(3, "three");
console.log(numbersAreEqual);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

var minimum = function(x,y){
  if(typeof x === "number" && typeof y === "number"){
    if(x<=y){
      return x;
      }else if(x>y){
      return y;
      }
  }
};
console.log(minimum(10,2));
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

var maximum = function(x,y){
  if(typeof x === "number" && typeof y === "number"){
    if(x>=y){
      return x;
      }else if(x<y){
      return y;
      }
  }
};
console.log(maximum(10,2));
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
var isEven = function(n){
  if(typeof n === "number"){
    if(n%2 === 0){
      return true;
    }
  }
};
console.log(isEven(10));

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
var isOdd = function(n){
  if(typeof n === "number"){
    if(n%2 !== 0){
      return true;
    }
  }
};
console.log(isOdd(10));

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
var percentage;
var grade;
var letterGrade = function(score, max){
    if(typeof score === "number" && typeof max === "number"){
      percentage = Math.floor((score/max)*100);
        if(percentage<60){
          grade = "F";
          return grade;
        }else if(percentage>=60 && percentage<70){
          grade = "D";
          return grade;
        }else if(percentage>=70 && percentage<80){
          grade = "C";
          return grade;
        }else if(percentage>=80 && percentage<90){
          grade = "B";
          return grade;
        }else if(percentage>=90){
          grade = "A";
          return grade;
        }
    }
};
letterGrade();

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
 var restaurant = {
  food: "yes",
  cooks : "no",
  reviews : 1776
 };
 var incrementReviews = function(object){
  if(object.hasOwnProperty("reviews")){
    object.reviews+=1;
    return object.reviews;
  }else{
    object.reviews = 1;
    return object.reviews;
  }
 };
 incrementReviews(restaurant);
 console.log(restaurant.reviews);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

