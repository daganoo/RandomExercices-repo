
let inputW = "test tst teeeeest"

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
//explain : programme gives the smallest name length in the list