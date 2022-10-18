// ARRAYS!

// string example
var guests = ['Bob', 'Dylan', 'Clyde', 'Charlie']; // arrays always square brackets for its values
var scores = [10, 15, 12, 17, 3, 11, 23];

// log out the arrays
console.log(guests); // (4) ['Bob', 'Dylan', 'Clyde', 'Charlie'] - the number in the parentheses tells you the length of the array
console.log(scores); // (7) [10, 15, 12, 17, 3, 11, 23] - the number in the parentheses tells you the length of the array

// access the element by using its index
console.log(guests[2]); // this will log out the third value in my array, or 'Clyde'
console.log(scores[3]);// this will log out the fourth value in my array, or 17

console.log(scores.length);
//run a for loop over an array
for (var i = 0; i < scores.length; i += 1) {
    console.log("Match #" + (i + 1) + " goals= " + scores[i]); // you can add the iteration counter to the variable so they are in sync
}

// create an ARRAY from a STRING with split method
var drivers = "Bottas,Norris,Vettal,Sainz,Perez,Verstappen,LeClerc".split(",");
console.log(drivers.length); // this will log out the number 7, as it is now turning all of those strings into values in an array
console.log(drivers); // (7) ['Bottas', 'Norris', 'Vettal', 'Sainz', 'Perez', 'Verstappen', 'LeClerc']

// create a STRING from an ARRAY with join method
console.log(scores.join()); // autoconverts it into a string
console.log(scores.join("")); // adding the quotation marks will take the commas away and combine all our values into one large number, this is because by default, join will looking for commas
console.log(guests.join());
console.log(guests.join(""));

// modify and element inside an array
guests[2] = 'Alan'; // we are targetting the variable of guests and telling it that we want to change the third value in that array to Alan
console.log(guests[2]); // Clyde has now changed to Alan
scores[0] = 9;
console.log(scores);

// We can ADD an element to the END of an array with push
scores.push(11);
console.log(scores);

guests.push('Elaine', 'Frodo');
console.log(guests);

// We can REMOVE elements from the END of an array with pop
var lastGuest = guests.pop();
console.log(guests);
console.log(lastGuest);

// We can ADD an element to the START of an array with unshift
guests.unshift('Gollum', 'Samwise', 'Merryn', 'Pippen'); // This will insert these strings into the start of an array
console.log(guests);

// We can REMOVE an element to the START of an array with shift
var unableToAttend = guests.shift();
console.log(unableToAttend); // This will only log out the very first string inside that array

// Splice - Add & Remove from an array
// splice(index, howManyItemsToRemove, itemToAdd, itemAdd2 ...)

// Add George and Robert at index # 2
guests.splice(2, 0, "George", "Robert"); // At the third string, remove nothing, and add George and Robert
console.log(guests);

// Remove George and Robert
guests.splice(2, 2); // From the third string, remove the next two strings
console.log(guests);

// You can organise an array using sort and reverse
var fruits = ["Banana", "apple", "orange", "Mango"];
fruits.sort();
console.log(fruits); // (4) ['Banana', 'Mango', 'apple', 'orange'] - JavaScript will organise this array in UNICODE order, and since uppercase are before lowercase
fruits.reverse();
console.log(fruits);

// sort numbers
var points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points); // By default, JavaScript will base the sort of the number by the first digit, so it will groups all the numbers starting with 1, 2, 3, etc.

points.sort(function(a, b){return a - b;}); // Ascending
console.log(points);

points.sort(function(a, b){return b - a;}); // Descending
console.log(points);

// Function that generates a random order and numbers from the array each time its called
for(var i = points.length -1; i > 0; i --) {
    var j = Math.floor(Math.random() * (i + 1));
    var k = points[j];
    points[i] = points[j];
    points[j] = k;
}

console.log(points);

// Objects in an array
var cars = [
    {
        type: "Lightning McQueen",
        year: 2006
    },
    {
        type: "Doc Hudson",
        year: 1980
    },
    {
        type: "Mater",
        year: 2002
    }
]

console.log(cars[0].type);
cars.sort(function(a,b){return a.year - b.year});
console.log(cars);

cars.sort(function(a,b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;};
    if (x > y) {return 1;};
    return 0;
});
console.log(cars);