
const prompt = require('prompt-sync')();
let mois = prompt("entrer le numéro du mois :");
let annee = prompt("entrer l'année :");

if (mois >= 1 && mois <= 12) {
    let dj = new Date(annee, mois, 0);
    console.log("Le mois " + mois + " de l'année " + annee + " a " + dj.getDate() + " jours.");
}
