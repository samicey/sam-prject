const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
    input: fs.createReadStream(`${__dirname}/jiberish2.txt`),
    // output: process.stdout,
    console: false
});

function getLength(line){
  let newLine = line.split("{")[1].split("_")
  if(newLine.length == 4){
    console.log(newLine);
    console.log(line);
  }
  return;
}

readInterface.on('line', function(line) {
  getLength(line)
});