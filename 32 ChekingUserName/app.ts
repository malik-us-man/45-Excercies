let curent_users = ["peter","braiN","paul","Roy","Nicky"];

let new_users = ["Brain","Paul","Vicky","Waran","Lee"];

//we will use forEach method

new_users.forEach(new_users =>{
let new_usersLower = new_users.toLowerCase();
    
 // we will use some()method
 let userNmaeTaken = curent_users.some(current_users => current_users.
    toLowerCase() === new_usersLower);

    //now we will apply conditions
    if (userNmaeTaken){
        console.log(`${new_users} needvto choose a new username because its already taken`);
    }else {
        console.log(`${new_users} is thw new member added`);
        curent_users.push(new_users)
    }


});

console.log(curent_users);


