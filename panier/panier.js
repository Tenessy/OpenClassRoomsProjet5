
const paniers = getPanier();
const panierVide = paniers.length === 0;
const getSomme = getSum();
//let titre= document.getElementById("titre").innerHTML = panierVide ? "Votre panier Orinoco est vide" : "Votre panier";
let prix =document.getElementById("prix");
let corps = document.querySelector(".corps");
if (panierVide) {
  corps.innerHTML = `
      <div class="card">
        <img src= "../PanierVide.png" />
        <a class="btn btn-primary" href="../index.html" role="button">Continuez vos achats</a>
      </div></br>`
      titre.innerHTML = "Votre panier Orinoco est vide";

}
else {
  prix.innerHTML = getSomme;
  titre.innerHTML = "Votre panier";
  console.log("OK");
}

for(let panier of paniers) {
    let teddyPanier = new Teddy(panier);
     document.querySelector(".carte").innerHTML +=
    ` <div class="card update" style="width: 18rem;">
     <img src="${teddyPanier.imageUrl}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${teddyPanier.name}</h5>
       <h6 class="card-subtitle mb-2 text-muted price">${teddyPanier.price}€</h6>
       <p class="card-text">${teddyPanier.description}</p>
       <h6>Qté</h6> <select class="form-select selected" data-id="${teddyPanier._id}" aria-label="Default select example">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
        <option value="4">4</option>
       </select>
       <a class="suppr" href="#">Supprimer</a>
     </div>
   </div></br>` 
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




