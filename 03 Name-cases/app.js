// // lower case
var personname = "Malik Usman";
console.log("lowercase:", personname.toLocaleLowerCase());
// upper case
console.log("uppercase:", personname.toUpperCase());
// titel case
console.log("titlecase:", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
