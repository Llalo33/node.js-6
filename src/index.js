//
const fs = require("fs")
const figlet = require("figlet")

let readFile = fs.readFileSync("text.txt", "utf-8");
figlet(readFile, function(err, data) {
    if(err) {
        return;
    }
    console.log(data)
})