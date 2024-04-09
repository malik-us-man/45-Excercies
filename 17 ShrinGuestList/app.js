var guestList = ["Jutt", "Ubaid", "Baloo", "Rana"];
console.log("I can invite only two pepole to dinner");
while (guestList.length > 2) {
    var removeguest = guestList.pop();
    console.log("Dear ".concat(removeguest, ",\nyou are not invited to the  dinner.\n"));
}
guestList.map(function (guestList) {
    return console.log("Dear ".concat(guestList, ",\nyou are still invited to the dinner.\n"));
});
