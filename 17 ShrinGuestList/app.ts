let guestList: string[] = ["Jutt", "Ubaid", "Baloo","Rana"];

console.log("I can invite only two pepole to dinner")

while (guestList.length>2){
    let removeguest = guestList.pop()
    console.log (`Dear ${removeguest},\nyou are not invited to the  dinner.\n`)
}
guestList.map ((guestList) =>
console.log(`Dear ${guestList},\nyou are still invited to the dinner.\n`))

