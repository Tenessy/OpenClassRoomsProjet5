const getUrlId = getUrl();
fetch("http://localhost:3000/api/teddies/" + getUrlId)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
  else {
    document.querySelector(".container").innerHTML =
          "<h1>Erreur 404 page introuvable</h1>";
          console.log("Erreur 404 page introuvable");
  }
})
  .then(teddy => {
        let ted = new Teddy(teddy);
        if(ted._id === getUrlId) {
          document.querySelector(".container").innerHTML = 
          `<div class="card" style="width: 18rem;">
          <img src="${ted.imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${ted.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${ted.price}€</h6>
            <select class="form-select selected"></select>
            <p class="card-text">${ted.description}</p>
            <div class="col text-center">
              <a href="#" class="btn btn-primary ajout" data-id="${ted._id}">Ajouter au panier</a>
            </div>
          </div>
        </div>` 
        }
        else {
          document.querySelector(".container").innerHTML =
          "<h1>Erreur 404 page introuvable</h1>";
          console.log("Erreur 404 page introuvable");
       }    
        function color() {
          let select = document.querySelector(".selected");
          let teddyColor = teddy.colors
          for (let i =0; i < teddyColor.length; i++) {
            console.log(teddyColor[i])
            let option = document.createElement("option");
            option.value = teddyColor[i];
            option.text = teddyColor[i];
            select.appendChild(option);   
          } 
        }
        color();
        document.querySelectorAll(".ajout").forEach(ajouter => {
          ajouter.addEventListener("click", function(e) {
             addProduct(teddy);
          })
        })
})


