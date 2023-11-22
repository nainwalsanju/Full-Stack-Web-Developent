//Learn File System

const fs  = require("fs");

//write to file
fs.writeFile("message.txt","WE are the Champions to this world\n",(error) => {
    if (error) throw error;
    console.log("this file has been saved");
});


//read from file
fs.readFile("message.txt","utf-8" ,(err, data) => {
    if(err) throw err;
    console.log(data);
})


//append to File
fs.appendFile("message.txt","Love of my Life\n",(error) => {
    if (error) throw error;
    console.log("this file has been saved");
});