const languageList = require("./languageList.json");
const path = require("path");
const fs = require("fs");

var badWords = [];

languageList.forEach(async key => {
    var filePath = path.resolve("./", "data", key + "txt");
    if(fs.existsSync(filePath)) {
        fs.readFile(filePath, {encoding: "utf-8"}, (data) => {
            console.log(data)
        })
    }
})