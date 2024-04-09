"use strict";
function mySandwiches(...item) {
    return `I want sandwich of ${item}`;
}
;
let collection1 = mySandwiches("Ham", " Chezz", " Letttuce");
let collection2 = mySandwiches("Swiss", " Turkey");
let collection3 = mySandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
