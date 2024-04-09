import { clearScreenDown } from "readline";

let guestList: string[] = ["Jutt", "Ubaid", "Baloo"];

let dontcome = guestList[1];

guestList.splice(1,1,"Tanoli")


guestList.forEach(guest => console.log(`Respected Sir: ${guest}\nwe invited you on dinner tomorrow.\nThank you\n`));

console.log(dontcome, "will not coming tomorrow dinner.");