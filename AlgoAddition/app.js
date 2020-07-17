function additionner(arr) {
let zmin = Math.min(...arr);
let zmax = Math.max(...arr);
let resultat = 0;
for(let i = zmin;i<=zmax;i++){
    resultat+=i;
}
return resultat;
}

console.log(additionner([4, 10000000]));
// 1+2+3+4 = 10

// ----------------- ÉNONCÉ -----------------

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres 
// qui se trouvent entre ces deux valeurs.




