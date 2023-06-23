" use strict"

// Dans une boîte de dialogue, demander la saisie d’une année.
// Afficher dans un popup si c’est une année bissextile ou non

// multiple de 4 mais pas un multiple de 100 ou alors un multiple de 400

let annee = prompt(" donnez moi une année ");

if  (annee % 400 === 0) {
    document.getElementById ( "bleu" ).innerText = (" C'est une année bis ");
}
else if 
    (annee % 100 === 0) {
    document.getElementById ( "vert" ).innerText = (" Ce n'est pas une année bis ");
}
else if 
    (annee % 4 === 0) {
    document.getElementById ( "bleu" ).innerText = (" C'est une année bis ")
}
else {
    document.getElementById ( "vert" ).innerText = (" Ce n'est pas une année bis ");
}