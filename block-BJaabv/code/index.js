// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge) {
  // Your code goes here
  var dogYears = puppyAge * 7;
  return `Your Doggie is ${dogYears} years old in dog years`;
}
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, moviesWatchedPerWeek) {
  // Your code goes here
  let moviesWatchedPerYear = moviesWatchedPerWeek * 4 * 12;
  const MAX_AGE = 60;
  return moviesWatchedPerYear * (MAX_AGE - age);
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
  // Your code goes here
  let fahrenheit = (9 / 5) * celsius + 32;
  return `${celsius}°C is ${fahrenheit}°F `;
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  // Your code goes here
  let celsius = (5 / 9) * fahrenheit - 32;
  return `${fahrenheit}°F is ${celsius}°C `;
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n = 1, x) {
  // Your code goes here
  return n > 0 ? n ** x : "The number below 1 is not allowed";
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(number, operator) {
  let i;
  let j = 0;
  let k = 1;
  switch (operator) {
    case `sum`:
      for (i = number; i >= 1; i--) {
        j = j + i;
      }
      return j;
    case `product`:
      for (i = number; i >= 1; i--) {
        k = k * i;
      }
      return k;
    default:
      return `Not a Valid Input`;
  }
  // Your code goes here
}

sumOrProductOfN(4, "sum"); // 10
sumOrProductOfN(4, "product"); // 24
sumOrProductOfN(4, "hello"); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
  return (n * (n + 1)) / 2;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
function sumOfN_5_7(n) {
  let sum = 0;
  // Your code goes here
  while (n > 0) {
    if (n % 5 === 0 || n % 7 === 0) {
      sum = sum + n;
    }
    n--;
  }
  return sum;
}
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a, b) {
  // Your code goes here
  return a < b ? `${a} is minimum` : `${b} is minimum`;
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(datatype) {
  // Your code goes here
  return typeof datatype;
}
