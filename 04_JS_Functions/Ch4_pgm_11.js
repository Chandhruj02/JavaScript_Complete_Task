// Using the same function with multiple objects

// var movie1;
// var movie2;
// var movie3;
// var movie;
// var showMovieInfo;

// movie1 = {
//     title: "Inside Out",
//     actors: "Amy Poehler, Bill Hader",
//     directors: "Pete Doctor, Ronaldo Del Carmen"
// };

// movie2 = {
//     title: "Spectre",
//     actors: "Daniel Craig, Christoph Waltz",
//     directors: "Sam Mendes"
// };

// movie3 = {
//     title: "Star Wars: Episode VII - The Force Awakens",
//     actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
//     directors: "J.J.Abrams"
// };

// showMovieInfo = function () {
//     console.log("Movie information for " + movie.title);
//     console.log("------------------------------");
//     console.log("Actors: " + movie.actors);
//     console.log("Directors: " + movie.directors);
//     console.log("------------------------------");
// };

// movie = movie1;
// showMovieInfo();

// movie = movie2;
// showMovieInfo();

// movie = movie3;
// showMovieInfo();

//<------ANSWER------>
var Quiz1;
var Quiz2;
var showQuestion;

Quiz1 = {
    Q : "Which of the following Language is used for Front-end Development",
	1 : "C++",
    2 : "Python",
    3 : "Java Script",
	4 : "None of the above"
};

Quiz2 = {
    Q : "Which of the following Language is used for Designing UI",
	1 : "Corel Draw",
    2 : "Figma",
    3 : "PhotoShop",
	4 : "None of the above"
};

showQuestion = function () {
    console.log("Question" + Quiz.Q);
    console.log("------------------------------");
    console.log("Options are");
    console.log("A)" + Quiz[1]);
	console.log("B)" + Quiz[2]);
	console.log("C)" + Quiz[3]);
	console.log("D)" + Quiz[4]);
    console.log("------------------------------");
};

Quiz = Quiz1;
showQuestion();

Quiz = Quiz2;
showQuestion();

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */
