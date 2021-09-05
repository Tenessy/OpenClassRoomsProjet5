const paniers = getPanier();
const panierVide = paniers.length === 0;
const getSomme = getSum();
document.querySelector(".nbr_article").innerHTML = paniers.length;
let prix = document.querySelector(".panier__prix");
let corps = document.querySelector(".corps");
if (panierVide) {
  titre.innerHTML = `<h2 class="kalam gras">Votre panier Orinoco est vide</h2`;
  corps.innerHTML =
     `<div class="text-center panier__empty">
         <img src= "../image/panier_vide.png"/></br></br>
         <a class="btn btn-primary panier__bouton_vide" href="../index.html" role="button">Continuez vos achats</a>
      </div><br>`
}
else {
  titre.innerHTML = `<h2 class="kalam gras">Votre panier</h2`;
  prix.innerHTML = `<h3 class="kalam">Prix total: ${getSomme}</h3>`;
  console.log("OK");
}

for (let panier of paniers) {
  let teddyPanier = new Teddy(panier);
  document.querySelector(".card").innerHTML +=
    `<div class="panier">
      <img src="${teddyPanier.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body panier__text_position">
       <h5 class="card-title kalam">${teddyPanier.name}</h5>
       <h6 class="card-subtitle mb-2 price kalam panier--color">${teddyPanier.price.toLocaleString()}€</h6>
       <h6>Qté</h6><select class="form-select selected" data-id="${teddyPanier._id}" style="width:80px" aria-label="Default select example">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
        <option value="4">4</option>
       </select>
       <a class="suppr" href="#" data-id="${teddyPanier._id}">Supprimer</a>
      </div>
      <div class="panier__border_bas"></div>
    </div>
    </br>`
  document.querySelectorAll(".suppr").forEach(product => {
    product.addEventListener("click", function (event) {
      deleteProduct(this.dataset.id); // supprime un produit du panier par rapport à son id.
    });
  });
}
