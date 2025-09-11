let username = prompt("Enter Name :");
let password = username.slice(0, 3) + "#" + username.length;
console.log(username);
console.log("Auto Generated Password :", password);