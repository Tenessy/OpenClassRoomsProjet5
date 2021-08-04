fetch("http://localhost:3000/api/teddies")
 .then(data => data.json())
  .then(teddiesArticle => {
       console.log(teddiesArticle);
      for(let teddieArticle of teddiesArticle) {
          let teddy = new Teddy(teddieArticle);
          document.querySelector(".container").innerHTML += 
          `<div class="card" style="width: 18rem;">
          <img src="${teddy.imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${teddy.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${teddy.price}€</h6>
            <p class="card-text">${teddy.description}</p>
            <a href="${url()}" class="btn btn-primary" data-id="${teddy._id}">Voir le produit</a>
          </div>
        </div>`
          
    } 
    document.querySelectorAll(".btn-primary").forEach(bouton => {
        bouton.addEventListener("click", function(e) {
            addTeddy(this.dataset.id);
           
        })
    })
 })