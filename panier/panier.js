
const paniers = getPanier();
const panierVide = paniers.length === 0;
const getSomme = getSum();
//let titre= document.getElementById("titre").innerHTML = panierVide ? "Votre panier Orinoco est vide" : "Votre panier";
let prix =document.querySelector(".panier__prix");
let corps = document.querySelector(".corps");
if (panierVide) {
  corps.innerHTML = 
     `<div class="text-center imgAuto">
         <img src= "../image/panier_vide.png" width="100%" class="imgAuto"/></br></br>
         <a class="btn btn-primary panier__bouton_vide" href="../index.html" role="button">Continuez vos achats</a>
       </div></br>`
      titre.innerHTML = `<h2 class="kalam gras">Votre panier Orinoco est vide</h2`;
}
else {
  prix.innerHTML = `<h3 class="kalam">Prix total: ${getSomme}</h3>`;
  titre.innerHTML = `<h2 class="kalam gras">Votre panier</h2`;
  console.log("OK");
}

for(let panier of paniers) {
    let teddyPanier = new Teddy(panier);
     document.querySelector(".card").innerHTML +=
    `<div class="panier">
      <img src="${teddyPanier.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title kalam">${teddyPanier.name}</h5>
       <h6 class="card-subtitle mb-2 price kalam panier--color">${teddyPanier.price.toLocaleString()}€</h6>
       <h6>Qté</h6><select class="form-select selected" data-id="${teddyPanier._id}" style="width:80px" aria-label="Default select example">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
        <option value="4">4</option>
       </select>
       <a class="suppr" href="#">Supprimer</a>
      </div>
      <div class="panier__border_bas"></div>
    </div>
    </br>` 
   document.querySelectorAll(".suppr").forEach((product,i) => product.addEventListener("click", () =>  deleteProduct(i)))
}

let somme = 0;
somme += panier.price;
  document.querySelectorAll(".selected").forEach(select => {
    select.addEventListener("change", function(e){
      let valeur = 0;
      valeur += e.target.value;
      console.log(valeur);
      console.log(this.dataset.id);
      if(valeur === undefined) {
        valeur = 1;
      }
      for(let i = 0; i <paniers.length; i++) {
       if(this.dataset.id === paniers[i]._id) {
         console.log(paniers[i].price);
        const sommeTotale = getSomme + (paniers[i].price * valeur) - paniers[i].price;
        console.log(sommeTotale);
         
       }
      }
      console.log(getSomme * valeur);
        
    });
   });  




