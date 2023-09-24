
const prompt = require("prompt-sync")();
let inputW = prompt("Enter phrase :");

function findShort(s) {
    let words = s.split(" ");
    let shortestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}
let shortw = findShort(inputW)
// Test
console.log("["+ shortw +"]"  + " is the shortest and it's length is " + shortw.length);
