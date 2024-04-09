"use strict";
//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    ;
    return album;
}
;
//Calling three function and creating 3 variables with different values
let album1 = make_album("Atif Aslam", "Album title 1");
let album2 = make_album("Suno Nagam", "Album title 2");
let album3 = make_album("Arjit Sing", "Album title 3", 9);
console.log(album1);
console.log(album2);
console.log(album3);
