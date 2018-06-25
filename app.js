console.log('Starting app');

const fs   =  require('fs');
const user =  require('os');
//const yargs=  require('yargs');
const notes=require('./notes.js');

var user1=user.userInfo();


//fs.appendFile('example.txt', `hello ${user1.username}!`);

console.log(process.argv);
//console.log(yargs.argv);
console.log(notes.age);