const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'test'),{}, err => {
//     if(err) throw err;
//     console.log("Folder created..");
// })

// fs.writeFile(path.join(__dirname,'test','Hello.txt'),"Hello World!", err =>{
//     if(err) throw err;
//     console.log("File written..");

//     fs.appendFile(path.join(__dirname,'test','Hello.txt'),"I love Node.js!", err =>{
//         if(err) throw err;
//         console.log("File written..");
//     })
// })

// fs.readFile(path.join(__dirname,'test','Hello.txt'),'utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

fs.rename(path.join(__dirname,'test','Hello.txt'),path.join(__dirname,'test','Helloworld.txt'), (err) => {
    if(err) throw err;
    console.log('File has been renamed..');
})