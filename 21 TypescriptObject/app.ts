interface item {
    name:string
    price:number
}
let Book: item ={
    name: "Essential Typescript 5",
    price: 999
}
let Cellphone: item ={
    name: "apple",
    price: 1000
}
console.log(`Book name ${Book.name}, price$${Book.price}`)

console.log(`Cellphone ${Cellphone.name}, price$${Cellphone.price}`)