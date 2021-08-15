const getUrlId = getUrl();
fetch("http://localhost:3000/api/teddies/" + getUrlId)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
  else {
    document.querySelector(".generale").innerHTML =
          `<h1>Erreur 404 page introuvable</h1>
          <img src="../image/404-error.jpg" alt="NotFound" />`;
          console.log("Erreur 404 page introuvable");
  }
})
  .then(teddy => {
        let ted = new Teddy(teddy);
        if(ted._id === getUrlId) {
          document.querySelector(".carte").innerHTML = 
          `<div class="container" width="350">
          <img src="${ted.imageUrl}"  class="card-img-top" alt="...">
          <h2 class="kalam">${ted.name}</h2>
            <h3 class="kalam">Prix: ${ted.price}€</h3>
            <p class="card-text">${ted.description}</p>
            <h6>Choisissez votre couleur:</h6>
            <select class="form-select selected" style="width:300px"></select></br>
            <div class="col text-center">
              <a href="#" class="btn btn-outline-primary ajout designAjout" data-id="${ted._id}">Ajouter au panier</a>
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
             document.querySelector('.alertProduit').style.display = 'block';
             document.querySelector('.alertProduit').innerHTML = ted.name + " a été ajouté à votre panier avec succès " + `<a href="../panier/panier.html>Voir mon panier</a>`
          })
        })
})


