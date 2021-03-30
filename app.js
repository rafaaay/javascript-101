// FizzBuzz
const output = fizzBuzz(30);
console.log(output);

function fizzBuzz(input) {
  if (typeof input == "number") {
    if (input % 3 === 0 && input % 5 === 0) {
      console.log("FizzBuzz");
    } else if (input % 3 === 0) {
      console.log("Fizz");
    } else if (input % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(input);
    }
  } else {
    console.log("not a number");
  }
}
// FizzBuzz

// Speed
checkSpeed(71);

function checkSpeed(speed) {
  const limit = 70;
  const kmPerPoint = 5;
  if (speed < limit + kmPerPoint) {
    console.log("Okay");
  } else {
    let points = Math.floor((speed - limit) / kmPerPoint);
    if (points >= 12) {
      console.log("License Suspended");
    } else {
      console.log("Points", points);
    }
  }
}
// Speed
