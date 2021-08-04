
fetch("http://localhost:3000/api/teddies/" + getUrl())
 .then(data => data.json())
  .then(teddy => {
        let teddyId = new Teddy(teddy);
        if (getUrl() == teddyId._id) {
          document.querySelector(".container").innerHTML = 
          `<div class="card" style="width: 18rem;">
          <img src="${teddyId.imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${teddyId.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${teddyId.price}€</h6>
            <select class="form-select selected"></select>
            <p class="card-text">${teddyId.description}</p>
            <a href="../panier/panier.html" class="btn btn-primary ajout" data-id="${teddyId._id}">Ajouter au panier</a>
          </div>
        </div>` 
        }
        else {
          document.querySelector(".container").innerHTML = 
          `<h1>Erreur 404 page introuvable</h1>`
        }
        
       color();

      function color() {
        let teddyColor = teddyId.colors;
        let select = document.querySelector(".selected");
        teddyColor.forEach(color => {
           select.innerHTML += '<option value=' + color + '>' + color + '</option>';        
       })
       select.addEventListener("change", function(e){
        recupColor(e.target.value);
           
       })

       document.querySelectorAll(".ajout").forEach(ajouter => {
         ajouter.addEventListener("click", function(e) {
             articlePanier(this.dataset.id);
         })
       })
    }
         
     
 
      
})
