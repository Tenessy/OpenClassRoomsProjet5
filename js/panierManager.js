let panier = getPanier();// Récupère le panier de teddy

function addProduct(teddy) {
  const teddyId = teddy._id;
  const teddynotFound = panier.find(item => item._id === teddyId) === undefined; // Vérifie si l'ours n'est pas déjà présent
  if(teddynotFound) {
    panier.push(teddy);// Ajoute l'ours dans le tableau si il n'est pas existant
    console.log("Ours non présent, Ajout OK");
    localStorage.setItem("panier", JSON.stringify(panier)); // Ajoute l'ours dans le localstorage pour permettre de garder les données
  }
  else {
    console.log("Ours présent");
    localStorage.clear();
  }
}
function getPanier() {
  let getStorage = localStorage.getItem("panier"); // Récupère le tableau de teddy du localstorage
  if (getStorage == null) {
    return [];
  }
  else {
     console.log(JSON.parse(getStorage));
     return JSON.parse(getStorage);
  }
}

function productsId() {
  const arrayTeddyId = [];
  for(let i = 0; i < panier.length; i++) {
    arrayTeddyId.push(panier[i]._id); // Ajout l'Id des ours présents dans le panier;
  }
  return arrayTeddyId;  // retourne le tableau d'Id des ours présents dans le panier
}
function getSum() {
  let sum = 0;
  for (let i = 0; i < panier.length; i++) {
        sum += panier[i].price;
  }    
  return "Prix total: " + sum + " € ";
}

function deleteProduct(index) {
  panier.splice(index, 1); // Supprime le produit correspondant à l'index dans le panier
  localStorage.setItem("panier", JSON.stringify(panier)); // Met à jour le panier
  document.location.reload(); //recharge la page pour actualiser le panier
}