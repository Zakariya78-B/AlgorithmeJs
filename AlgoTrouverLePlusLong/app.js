function trouverLongueurMax(str){
    let zak = str.split(" ");
    /*
    let long = "" ;
   
    for(let i = 0;i<zak.length;i++){
        if(long.length<zak[i].length){
            long = zak[i];
        }
    }
return long;*/



    if(zak.length === 1){
        return zak[0];
    }

    if(zak[0].length >= zak[1].length){

        zak.splice(1,1);
        return trouverLongueurMax(zak.join(' '));
    }

    if(zak[0].length <= zak[1].length){
  
        return trouverLongueurMax(zak.slice(1).join(' '));

    }

}


console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));



// ----------------- ÉNONCÉ -----------------

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

// ----------------- CONSEILS -----------------

// Le but ici va être de le faire de trois manières différentes, avec trois concepts
// différents.
 
// 1: avec une boucle For.
// 2: avec une méthode Callback.(reduce,Math.max)
// 3: avec une récursion.(slice, splice)
