// Passing a function an object as an argument

var planet1;
var planet2;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911, // in kilometers
    sizeRank: 1
};

// Create a second planet object
planet2 = {
    name: "Mars",
    position: 4,
    type: "Terrestrial",
    radius: 3389.5, // in kilometers
    sizeRank: 7
};

// Update the getPlanetInfo function to include more details
getPlanetInfo = function (planet) {
    return planet.name + " (Position: " + planet.position + "):\n" +
        "Type: " + planet.type + "\n" +
        "Radius: " + planet.radius + " km\n" +
        "Size Rank: " + planet.sizeRank;
};

// Log details for both planets
console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));




/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */