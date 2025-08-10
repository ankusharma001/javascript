const fs = require("fs");
const os = require("os");

// fs.writeFileSync('./text.txt' , 'hey there');


console.log(os.cpus().length);


fs.writeFile('./text.txt', 'hey there', (err) => {
  if (err) {
    console.log("There is an error in the process:");
  } else {
    console.log("File written successfully!");
  }
});




// const result = fs.readFileSync('./text.txt' , 'utf-8');

// console.log(result);


// fs.appendFileSync('./text.txt' , new Date().getDate().toLocaleString())