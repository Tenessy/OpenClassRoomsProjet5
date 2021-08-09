const panier = getPanier();

function getPanier() {
  let getStorage = localStorage.getItem("panier");
  if (getStorage == null) {
    return [];
  }
  else {
    console.log(JSON.parse(getStorage));
    return JSON.parse(getStorage);
  }
}
function addProduct(teddy) {
  const teddyId = teddy._id;
  const teddynotFound = panier.find(item => item._id === teddyId) === undefined;
  if(teddynotFound) {
    panier.push(teddy);
    console.log("Ours non présent, Ajout OK");
    localStorage.setItem("panier", JSON.stringify(panier));
  }
  else {
    console.log("Ours présent");
    localStorage.clear();
  }
}
function productsId() {
  const arrayTeddyId = [];
  for(let i = 0; i < panier.length; i++) {
    arrayTeddyId.push(panier[i]._id);
  }
  return arrayTeddyId;
}
function getSum() {
  let sum = 0;
  for (let i = 0; i < panier.length; i++) {
        sum += panier[i].price;
  }    
  return "Prix total: " + sum + " € ";
}