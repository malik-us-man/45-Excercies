"use strict";
let userNames = ["Malik", "Ali", "Baloo", "Ubaid", "Tanoli", "Admin"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] == "Admin") {
        console.log(`\nHello ${userNames[i]} would you like to see a status report?\n`);
    }
    else {
        console.log(`Hello ${userNames[i]} thank you for logging in again!`);
    }
}
