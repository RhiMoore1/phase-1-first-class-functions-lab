
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// declare an anonymous function that takes one argument, an array
// return a new array with the first two drivers in the array
const returnFirstTwoDrivers = function (arrayParameters) {
    return arrayParameters.slice(0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


// declare an anonymous function that takes one argument, an array
// return a new array with the last two drivers in the array
const returnLastTwoDrivers = function (arrayParameters) {
    return arrayParameters.slice(2, 4);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


// create an array containing two elements, the first two function previously defined
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// create a higher order function that take one argument, an integer
// returns a function that takes the argument and multiplies it by the fare
function createFareMultiplier(int) {
    return function(fare) {return int * fare};
}


// declare a varaible with const and assign a function returned by createFareMultiplier()
// invoke createFareMultiplier() in such a way that the new
// fareDoubler() function accepts a fare as its lone argument and doubles it
const fareDoubler = function (int) {
    return createFareMultiplier(int)(2);
}
/*
const fareDoubler = createFareMultiplier(2);
*/


// declare a varaible with const and assign a function returned by createFareMultiplier()
// invoke createFareMultiplier() in such a way that the new
// fareTripler() function accepts a fare as its lone argument and triples it
const fareTripler = function (int) {
    return createFareMultiplier(3)(int);
}
/*
const fareTripler = createFareMultiplier(3);
*/


// this function takes two arguments - an array of drivers - and
// either the returnFirstTwoDrivers() or returnLastTwoDrivers() function
// return either the first two or the last two drivers

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}







