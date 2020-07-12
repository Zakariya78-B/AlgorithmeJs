function memeLettres(arr) {
    let test = arr[1].toLowerCase();
    let mot = arr[0].toLowerCase();
    for(let i =0;i < test.length; i++){
        if(mot.indexOf(test[i]) === -1){
           
            return false;
        }
    }
    return true
}
console.log(memeLettres(["concupiscence", "sens"]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.



