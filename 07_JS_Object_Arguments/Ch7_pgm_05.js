// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);

var showLarger = function (num1,num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(larger + " is larger than " + smaller);
}

showLarger(45,20);
showLarger(2530, 325);

var showSmallest = function (num1,num2,num3){
    var smallest = Math.min(num1,num2,num3);
    var larger = Math.max(num1, num2, num3);
    console.log(smallest + " is smaller than " + larger );
}

showSmaller(450,12,8);

/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */