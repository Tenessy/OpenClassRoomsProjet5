const getUrlId = getUrl();
const longueurPanier = getPanier().length;
document.querySelector(".nbr_article").innerHTML = longueurPanier;

fetch("http://localhost:3000/api/teddies/" + getUrlId)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
    else {
      document.querySelector(".generale").innerHTML =
        `<h1 class="kalam gras text-center">Erreur 404 page introuvable</h1>
          <img src="../image/404-error.jpg" alt="NotFound" />`;
      console.log("Erreur 404 page introuvable");
    }
  })
  .then(teddy => {
    let ted = new Teddy(teddy);
    if (ted._id === getUrlId) {
      document.querySelector(".carte").innerHTML =
        `<div class="container" width="350">
              <img src="${ted.imageUrl}" class="card-img-top card-img__size" alt="..." />
             </br></br><h2 class="kalam gras primary">${ted.name}</h2><br>
             <h3 class="kalam">Prix: ${ted.price.toLocaleString()}€</h3>
             <h4 class="kalam">Description du produit:</h4>
             <p class="card-text">${ted.description}</p><br>
             <h5 class="kalam">Choisissez votre couleur:</h5>
             <select class="form-select selected"style="width:200px"></select></br><br>
             <div class="col text-center">
              <a href="#" class="btn size btn-outline-primary ajout designAjout" data-id="${ted._id}">Ajouter au panier</a>
            </div>
          </div>`
    }
    else {
      document.querySelector(".container").innerHTML =
        "<h1>Erreur 404 page introuvable</h1>";
      console.log("Erreur 404 page introuvable");
    }

    color(teddy);
    document.querySelectorAll(".ajout").forEach(ajouter => {
      ajouter.addEventListener("click", function (e) {
        addProduct(teddy);
        document.location.reload();
      });
    });
  });

function color(teddy) {
  let select = document.querySelector(".selected");
  let teddyColor = teddy.colors;
  if (teddyColor === []) {
    console.log("Le tableau est vide");
  }
  else {
    for (let i = 0; i < teddyColor.length; i++) {
      console.log(teddyColor[i]);
      let option = document.createElement("option");
      option.value = teddyColor[i];
      option.text = teddyColor[i];
      select.appendChild(option);
      console.log("Couleurs ajoutées avec succès");
    }
  }
}
