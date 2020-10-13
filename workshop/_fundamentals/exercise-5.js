// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  // Insert missing solution please
  let count = 0;
  switch (month) {
    case "January":
      count = 31;
      return count;
    case "February":
      count = 28;
      return count;
    case "March":
      count = 31;
      return count;
    case "April":
      count = 30;
      return count;
    case "May":
      count = 31;
      return count;
    case "June":
      count = 30;
      return count;
    case "July":
      count = 31;
      return count;
    case "August":
      count = 31;
      return count;
    case "September":
      count = 30;
      return count;
    case "October":
      count = 31;
      return count;
    case "November":
      count = 30;
      return count;
    case "December":
      count = 31;
      return count;
  }
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
