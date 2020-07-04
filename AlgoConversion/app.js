function conversion(degCel) {
if (typeof(degCel)!="number"){
    return "Données en entrée non correctes.";
}else
    
    return degCel*(9/5) + 32;
}

console.log(conversion("popeydsfsdfs"));



// ----------------- ÉNONCÉ -----------------

// Créer un algorithme qui sert à convertir des degrés Celsius
// en degrés Fahrenheit.
// Le résultat doit être de type nombre.
// Si on donne un autre type qu'un nombre en argument, vous
// devez retourner "Données en entrée non correctes."
// Bonne Chance !

// ----------------- CONSEILS -----------------

// le calcul pour convertir les degrés Celsius en Fahrenheit
// est : (degCel * (9/5) + 32);

// Pour connaitre le type de notre argument on peut faire
// console.log(typeof(5));  "number"
// console.log(typeof("abc"));  "string"
// etc ...





