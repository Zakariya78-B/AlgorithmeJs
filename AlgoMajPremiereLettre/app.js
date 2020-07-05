function maj(str) {
    let tabmaj=[];
  let tab= str.split(" ");
  let maptab= tab.map( x => x.charAt(0).toUpperCase());
  for(let i= 0;i<tab.length; i ++){
     
     tabmaj.push(tab[i].replace(tab[i].charAt(0),maptab[i])); 
  }
  return tabmaj.join(" ");
}

console.log(maj("Les sanglots longs des violons de l'automne..."));


// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends une phrase en argument et qui retourne cette meme
// phrase avec la premiere lettre de chaque mots en Majuscule.




