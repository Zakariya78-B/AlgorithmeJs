function finSimilaire(str, fin) {
 if(str.slice(str.length-fin.length)==fin){
     return "La fin est similaire";
 }else
 return "La fin ne correspond pas";

}

console.log(finSimilaire("ouxrs", "xrs"));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".




