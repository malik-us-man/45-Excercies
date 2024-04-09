"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["Jutt", "Ubaid", "Baloo"];
var dontcome = guestList[1];
guestList.splice(1, 1, "Tanoli");
guestList.forEach(function (guest) { return console.log("Respected Sir: ".concat(guest, "\nwe invited you on dinner tomorrow.\nThank you\n")); });
console.log(dontcome, "will not coming tomorrow dinner.");
