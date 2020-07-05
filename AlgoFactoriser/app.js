function factoriser(num) {
    let resultat=1;
for (let i = 1 ; i<= num; i++){
    resultat = resultat * i; 
   
}
return resultat;
}

console.log(factoriser(5));

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
// Pour rappel lorsqu'on factorise 5 :
// 5! = 1 * 2 * 3 * 4 * 5 = 120.
// C'est le produit de tous les entiers qui précèdent ou qui sont
// égaux à N, ici 5.






