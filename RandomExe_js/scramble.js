function scramble(str1, str2) {
    let findIt = true;

    str1 = str1.split("");
    str2 = str2.split("");

    for (let i = 0; i < str2.length; i++) {

        for (let j = 0; j < str1.length; j++) {
            if (str1[j] == str2[i]) {
                str1[j] = " "
                str2[i] = " "
                break
            }
        }
    }
    for (let ii = 0; ii < str2.length; ii++) {
        if (str2[ii] != ' ') {
            findIt = false
        }
    }
    

    return findIt;
}
console.log(scramble("abcdefgh","fg"))

 //explain the exercice :the output give true if the string 1 of scramble function involve all the alphabet of string 2
