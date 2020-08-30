function trouverLaPersonne(data, source) {
  var srcKeys = Object.keys(source);
  

  return data.filter(function(obj){
    for(var i = 0 ; i < srcKeys.length; i++){
    if(obj.hasOwnProperty(srcKeys[i])=== false || obj[srcKeys[i]] !== source[srcKeys[i]]){
      return false
    }
     //console.log(obj[srcKeys[i]]);
     //console.log(source[srcKeys[i]]);
    }
    return true;
  })
}

console.log(
  trouverLaPersonne(
  [
    { prenom: "Tom", nom: "Durand" },
    { prenom: "Juliette", nom: "Garcia" },
    { prenom: "Jean", nom: "Lafite" },
    { prenom: "Lucien", nom: "Lafite" },
    { prenom: "Lucien", abc: "Lafite" }
  ], 
    { nom: "Lafite" }
  ));


// ----------------- ÉNONCÉ -----------------

// On passe en entrée un tableau d'objet et un objet, vous devez afficher, dans un
// tableau, les objets qui ont la même propriété("nom") ET la même valeur
// associée à cette propriété.
// l'exemple ici devrai retourner : [{prenom: "Jean", nom: "Lafite"}, {prenom: "Lucien", nom: "Lafite"}];

