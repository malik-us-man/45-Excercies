"use strict";
let magicianNames = ["Brain", "Roy", "Sid", "Paul"];
function show_magicians(greet) {
    for (let item of magicianNames) {
        console.log(greet, item);
    }
}
show_magicians("Hello, how are you Mr.");
