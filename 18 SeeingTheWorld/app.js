var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of places to visit
var places = ["Tokyo", "Paris", "New York", "Sydney"];
// Print the array in its original order
console.log("Original Order:", places);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
// Show that the array is still in its original order
console.log("Original Order:(after sorting):", places);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], places, true).sort().reverse());
// Show that the array is still in its original order
console.log("Original Order:(after reverse sorting):", places);
// Reverse the order of the list
places.reverse();
// Print the array to show that its order has changed
console.log("Reversed Order:", places);
// Reverse the order of the list again
places.reverse();
// Print the array to show it's back to its original order
console.log("Back to Original Order:", places);
// Sort the array in alphabetical order and print
places.sort();
console.log("Sorted in Alphabetical Order:", places);
// Sort the array in reverse alphabetical order and print
places.reverse();
console.log("Sorted in Reverse Alphabetical Order:", places);
