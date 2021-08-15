
fetch("http://localhost:3000/api/teddies")
 .then(data => data.json())
  .then(teddiesArticle => {
      for(let teddieArticle of teddiesArticle) {
          let teddy = new Teddy(teddieArticle);
          document.querySelector(".carte").innerHTML += 
          `
            <div class="card" style="width: 18rem;">
              <img src="${teddy.imageUrl}" class="card-img-top" alt="...">
              <div class="card-body>
               <h5 class="card-title font-weight-bold">${teddy.name}</h5>
               <h6 class="card-subtitle mb-2 text-muted">${teddy.price}€</h6>
               <p class="card-text">${teddy.description}</p>
               <div class="col text-center">
                 <a href="produit/produit.html?id=${teddy._id}" class="btn btn-primary">Voir le produit</a>
               </div>
               </div>
          </div></br>`
        
    } 
});

 