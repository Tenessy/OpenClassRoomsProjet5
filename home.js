
fetch("http://localhost:3000/api/teddies")
 .then(data => data.json())
  .then(teddiesArticle => {
    for(let teddieArticle of teddiesArticle) {
      let teddy = new Teddy(teddieArticle);
      document.querySelector(".cartes").innerHTML += 
      `<div class="card cartes__onlyOne cartes__onlyOne--color d-flex flex-lg-row flex-xl-row flex-xxl-column cartes__onlyOne__lg">
        <img src="${teddy.imageUrl}" class="card-img-top" alt="ours en peluche" />
        <div class="card-body text-center">
          <h4 class="card-tittle font-weight-bold kalam gras primary">${teddy.name}</h4>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div></br>
          <h4 class="card-subtitle kalam">${teddy.price.toLocaleString()}€</h4>
          <div class="col text-center">
            <a href="produit/produit.html?id=${teddy._id}" class="btn btn-primary">Voir le produit</a>
          </div>
        </div>
      </div></br>`    
    } 
  });

 