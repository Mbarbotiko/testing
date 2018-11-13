var assertThrows = function (func, x, y) {
  var threw = false;

  try {

    func(x, y);

  } catch (err) {
    console.log(err)

    threw = true;

  }
  // Wrap func with a try/catch
  // If an error is thrown, set threw to true
  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function (x, y) {
  console.log(typeof x)
  console.log(typeof y)
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof x !== 'string' || typeof y !== 'string') {
    // throw an error if either x or y is not a number
    throw new Error("One of these is not a number.  Please enter both as numbers")
  }
  else return x * y;
};

console.log(assertThrows(multiply, 5, 5))
console.log(assertThrows(multiply, 'W', 5))

