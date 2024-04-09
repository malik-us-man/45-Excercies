var userNames = ["Malik", "Ali", "Baloo", "Ubaid", "Tanoli", "Admin"];
//toremove all member
//userNames = [];
if (userNames.length > 0) {
    for (var i = 0; i < userNames.length; i++) {
        if (userNames[i] == "Admin") {
            console.log("Hello ".concat(userNames[i], " would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(userNames[i], " thank you for logging in again!"));
        }
    }
}
else {
    console.log("we need to find some users!");
}
