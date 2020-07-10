function insere(arr, num) {
    const byValue = (a,b) => a - b;
    arr.push(num);
    arr.sort(byValue);
    for(let i = 0; i<arr.length;i++){
        if(arr[i]==num){
            return i;
        }
    }

}

console.log(insere([30,45,87,96,54,29], 2000));

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau et un nombre en parametre.
// Vous devez d'abord trier ce tableau du plus petit au plus grand.
// Puis retourner la position du nombre si on l'insère dans ce tableau
// entre la valeur en dessous et au dessus de ce nombre.

// Par exemple : insere([10,20,30,40],25) -> 2 
// insere([30,45,87,96,54,29], 2000) -> 6, car il sera inseré à la 6eme place.



