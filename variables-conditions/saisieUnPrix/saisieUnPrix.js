"use strict"

// Demander la saisie d’un prix
// Afficher le prix TTC dans la page HTML

let price = prompt ( " saisissez un prix ");

document.getElementById ("price").innerText = ( price * 1.2 );
