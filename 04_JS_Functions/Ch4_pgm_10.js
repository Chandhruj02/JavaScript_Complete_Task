// Calling the showMovieInfo function

var movie1;
var showMovieInfo;
var showMovieInfo2;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

movie = movie1;

movie2 = {
    title: "Vikram",
    actors: "Vijay, Trisha",
    directors: "Lokesh Kanagaraj"
};

showMovieInfo2 = function () {
	console.log("Movie information for " + movie2.title);
	console.log("------------------------------");
	console.log("Actors: " + movie2.actors);
	console.log("Directors: " + movie2.directors);
	console.log("------------------------------");
  };

showMovieInfo();
showMovieInfo2();



/* Further Adventures
 *
 * 1) Without declaring a movie2 variable,
 *    assign movie2 to the movie variable
 *    instead of movie1.
 *    i.e. movie = movie2;
 *    What happens when you call showMovieInfo?
 *
 * 2) Create an empty object and
 *    assign it to a movie2 variable.
 *    What happens when you call showMovieInfo now?
 *
 * 3) Fill out movie2 with the properties
 *    needed by showMovieInfo.
 *    What happens when you call showMovieInfo now?
 *
 */
