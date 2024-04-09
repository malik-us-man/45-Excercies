// let guestList: string[] = ["Jutt", "Ubaid", "Baloo"];
// let dontcome = guestList[1];
// guestList.splice(1,1, "Tanoli");
// console.log("Good News ! We have found a bigger table for dinner.\n");
// guestList.unshift("Qaser");
// guestList.push("Junaid");
// let middleindex: number = Math.floor(guestList.length /2);
// guestList.splice(middleindex, 0, "Rana");
// console.log("updated list of our guest");
// guestList.forEach(oneguest => console.log(`Respected sir ${oneguest}.\nwe invited you on dinner tomorrow.\n\nThank you`))
// console.log(dontcome, "will not coming tomorrow dinner.");
var guestList = ["Jutt", "Ubaid", "Baloo", "Rana"];
console.log("I can invite only two pepole to dinner");
while (guestList.length > 0) {
    var removeguest = guestList.pop();
    console.log("Dear ".concat(removeguest, ", you are not invited to the  dinner.\n"));
}
guestList.map(function (guestList) {
    return console.log("Dear ".concat(guestList, ",\nyou are still invited to the dinner.\n"));
});
guestList.pop();
