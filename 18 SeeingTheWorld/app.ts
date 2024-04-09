// Define the array of places to visit
let places: string[] = ["Tokyo","Paris","New York","Sydney"];

// Print the array in its original order
console.log("Original Order:",places);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:",[...places].sort());

// Show that the array is still in its original order
console.log("Original Order:(after sorting):",places);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:",[...places].sort().reverse());

// Show that the array is still in its original order
console.log("Original Order:(after reverse sorting):",places);

// Reverse the order of the list
places.reverse();

// Print the array to show that its order has changed
console.log("Reversed Order:",places);

// Reverse the order of the list again
places.reverse();

// Print the array to show it's back to its original order
console.log("Back to Original Order:",places);

// Sort the array in alphabetical order and print
places.sort();
console.log("Sorted in Alphabetical Order:",places);

// Sort the array in reverse alphabetical order and print
places.reverse();
console.log("Sorted in Reverse Alphabetical Order:",places);
