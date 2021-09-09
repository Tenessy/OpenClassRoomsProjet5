let panier = getPanier();// Récupère le panier de teddy

function addProduct(teddy) {
  const teddyId = teddy._id;
  if (teddyId) {
    console.log("Ours trouvé");
    const teddynotFound = panier.find(item => item._id === teddyId) === undefined; // Vérifie si l'ours n'est pas déjà présent
    if (teddynotFound) {
      panier.push(teddy);// Ajoute l'ours dans le tableau si il n'est pas existant
      console.log("Ours non présent, Ajout OK");
      localStorage.setItem("panier", JSON.stringify(panier)); // Ajoute l'ours dans le localstorage pour permettre de garder les données
    }
    else {
      console.log("Ours déjà présent");
    }
  }
  else {
    console.log("Ours non trouvé");
  }
}

function getPanier() {
  let getStorage = localStorage.getItem("panier"); // Récupère le tableau de teddy du localstorage
  if (getStorage === null) {
    return [];
  }
  else {
    return JSON.parse(getStorage); // retourne le panier sous un objet javascript
  }
}

function productsId() {
  const arrayTeddyId = [];
  let taillePanier = panier.length;
  if (taillePanier !== 0) {
    for (let i = 0; i < taillePanier; i++) {
      arrayTeddyId.push(panier[i]._id); // Ajout l'Id des ours présents dans le panier;
    }
    return arrayTeddyId;  // retourne le tableau d'Id des ours présents dans le panier
  }
  else {
    console.log("le panier est vide");
  }
}

function getSum() {
  let somme = 0;
  let result;
  if (panier.length !== 0) {
    for (let i = 0; i < panier.length; i++) {
      somme += panier[i].price / 100; // parcours le tableau panier et ajoute tout les prix qui sont contenus dans la variable somme
      result = somme.toLocaleString();
    }
    console.log(somme);
    return result + " € "; // retourne la somme du panier
  }
  else {
    console.log("panier vide pas de prix à afficher");
  }

}

function deleteProduct(id) {
  const teddyIndex = panier.findIndex(item => item._id === id);// Recherche l'élément dans le tableau panier qui contient l'id passé en paramètre  //renvoie la position (l'indice) qui correspond à l'élément trouvé dans le tableau
  if (teddyIndex !== -1) {
    panier.splice(teddyIndex, 1); // Supprime le produit correspondant à l'index dans le panier
    localStorage.setItem("panier", JSON.stringify(panier)); // Met à jour le panier
    console.log("L'ours a été correctement supprimé");
    document.location.reload(); //Recharge la page pour actualiser le panier
  }
  else {
    console.log("l'ours n'est pas présent dans le tableau");
  }
}

