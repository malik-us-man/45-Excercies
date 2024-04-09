"use strict";
function describe_city(nameOfCity, country = "Pakistan") {
    return `${nameOfCity} is in ${country}`;
}
let city1 = describe_city("Karachi");
let city2 = describe_city("Lahore");
let city3 = describe_city("Hari Pur");
let city4 = describe_city("Paris", "France");
let city5 = describe_city("Barcelona", "Spain");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
console.log(city5);
