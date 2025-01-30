// fonction pour afficher une ligne d'etoiles
function afficherEtoiles(n) {
    let etoile = '';
    for (let i = 0; i < n; i++) {
        etoile += '*';
    }
    console.log(etoile)
    return etoile; // 
}
afficherEtoiles(2)
afficherEtoiles(5)

// Fonction pour afficher un rectanle d'etoiles
function afficherRectangle(hauteur, largeur) {
    let rectangle = '';
    for (let i = 0; i < hauteur; i++) {
        rectangle += afficherEtoiles(largeur) + '\n'; 
    }
    console.log(rectangle);
    return rectangle 
}

afficherRectangle(5, 5);

// Fonction pour afficher un trianle d'étoiles (droite)
function afficherTriangleDroite(n) {
    let triangle ='';
    for(let i = 0; i <= n; i++ ){
        let ligne = '';
        for(let j = 1; j <= i; j++){
            ligne += '*';
        }
   triangle += ligne + '\\' +'\n'
}
   console.log(triangle)
   return(triangle)
}

  afficherTriangleDroite(5);

  function afficherTriangleGauche(n) {
    let triangle ='';
    for(let i = 0; i <= n; i++ ){
        let ligne = '';
        for(let j = 1; j <= i; j++){
            ligne += '*';
//@TODO essayer de mettre les espaces avant les etoiles     
        }
   triangle +=  '/'+ligne  +'\n'
   
}
   console.log(triangle)
   return(triangle)
}
afficherTriangleGauche(5)

//fonction pour afficher la pointe du sapin
function afficherPointeSapin(){
    let pointe = '+'+'\n'+'|'+'\n'+'|'+'\n'+'|'+'\n'+'|'
    console.log(pointe)
}
afficherPointeSapin()

function afficherSapin(etages, hauteur_etage) {
    // à remplir
  }
  
  afficherSapin(3, 3)



