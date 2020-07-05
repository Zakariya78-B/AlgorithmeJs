function plusGrandNb(arr) {
  let zak= [];
  for(let i= 0 ;i <= arr.length-1; i++){
    let grand = 0; 
    for( let j = 0; j <= arr[i].length-1;j++){
      if(grand<arr[i][j]){
        grand = arr[i][j];  
      }    
    } zak.push(grand);
  }
  return zak;
 
}


console.log(plusGrandNb([
                        [1, 5, 8, 3],
                        [15, 47, 88, 26],
                        [32, 35, 37, 39],
                        [3000, 1001, 857, 1]
                      ]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en 
// argument et qui retourne un seul tableau qui contient la valeur maximale de 
// chaque tableaux.





