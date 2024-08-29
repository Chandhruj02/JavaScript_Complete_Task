// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));



/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */

var buildCars;
var getCarsinfo;
var Car1;
var Car2;

function buildCars(Name, Fueltype, TopSpeed){
    return {
        Name : Name,
        Cartype : Fueltype,
        Speed : TopSpeed
    }
}

getCarsinfo = (car) => {
    return "Car Name:" + car.Name + "\nCar Type:" + car.Cartype;  
}

Car1 = buildCars("BMW", "Petrol", 200);
Car2 = buildCars("BMW-M3", "Petrol", 210);

console.log(getCarsinfo(Car1));
console.log(getCarsinfo(Car2));