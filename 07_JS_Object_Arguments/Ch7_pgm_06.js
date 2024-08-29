// Using Math.min and Math.max to constrain an argument
var line = function (lineLength) {
  var line = "=".repeat(40);
  lineLength = Math.max(0, Math.min(40, lineLength));
  return line.substr(0, lineLength);
};

console.log(line(30));
console.log(line(40));
console.log(line(50));

// Test line lengths from -20 to 60 in steps of 10
for (i= -20; i<= 60; i+=10)
{
  console.log("Length of the Line:" + i + ":" + line(i));
}

// Spaces function
var spaces = function (spaceLength) {
  spaceLength = Math.max(0, Math.min(40, spaceLength));
  return " ".repeat(spaceLength);
};

console.log(spaces(10) + "Hello");

// EmptyBox function
var emptyBox = function (width) {
  width = Math.max(2, Math.min(40, width));

  var topBottomLine = "=".repeat(width);
  var middleLine = "=" + spaces(width - 2) + "=";

  console.log(topBottomLine);
  for (var i = 0; i < 3; i++) {
      console.log(middleLine);
  }
  console.log(topBottomLine);
};

emptyBox(12);

  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */