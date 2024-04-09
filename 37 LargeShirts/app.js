"use strict";
//making larg as default
// function make_shirt(label: string, size: string = "large"){
//     return size + label
// }
// let myFunction = make_shirt (" I love Typescript")
// console.log(myFunction)
//making medium as default
// function make_shirt(label: string, size: string = "medium"){
//     return size + label
// }
// let myFunction = make_shirt (" I love Typescript")
// console.log(myFunction)
// making shirt of any size
function make_shirt(label, size) {
    return size + label;
}
let myFunction = make_shirt(" any size", "I love Typescript");
console.log(myFunction);
