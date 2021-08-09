const paniers = getPanier();
const sommePrix = getSum();
const panierVide = paniers.length === 0;

document.getElementById("titre").innerHTML = panierVide ? "Votre panier Orinoco est vide" : "Votre panier";
document.getElementById("prix").innerHTML = sommePrix;

for(let panier of paniers) {
    let teddyPanier = new Teddy(panier);
     document.querySelector(".container").innerHTML += 
    ` <div class="card" style="width: 18rem;">
     <img src="${teddyPanier.imageUrl}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${teddyPanier.name}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${teddyPanier.price}€</h6>
       <p class="card-text">${teddyPanier.description}</p>
       <select class="form-select selected" data-id="${teddyPanier._id}"aria-label="Default select example">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
        <option value="4">4</option>
       </select>
     </div>
   </div></br>` 
   function compte(){
       document.querySelector(".selected").addEventListener("change", function(e){
           let valeur = e.target.value;
           console.log(teddyPanier._id);
          let somme = 0
          somme += valeur * e.target.teddyPanier.price;
          console.log(somme);
       })

   }
   compte();

}


