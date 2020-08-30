function difTab(arr1, arr2) {
    function dif(test){
        let tabt = new Array();
        for (let i = 0 ; i<test.length;i++){
          if (test.indexOf(test[i]) == -1){
              console.log(test.indexOf(test[i]));
          }
    
        }
        return tabt;
    }
    let tab = arr1.concat(arr2);
    let res = dif(tab);
return res;
}
console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  

// ----------------- ÉNONCÉ ----.push-------------

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prends deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();