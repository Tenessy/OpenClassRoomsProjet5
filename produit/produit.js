
fetch("http://localhost:3000/api/teddies/" + getUrl())
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
  .then(teddy => {
        let teddyId = new Teddy(teddy);
          document.querySelector(".container").innerHTML = 
          `<div class="card" style="width: 18rem;">
          <img src="${teddyId.imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${teddyId.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${teddyId.price}€</h6>
            <select class="form-select selected"></select>
            <p class="card-text">${teddyId.description}</p>
            <a href="#" class="btn btn-primary ajout" data-id="${teddyId._id}">Ajouter au panier</a>
          </div>
        </div>` 

        let arrayProducts = addProducts();

        function addProducts() {
          let arrayProducts = [];
           const id = teddy._id;
           const name = teddy.name;
           const price = teddy.price;
           const image = teddy.imageUrl;
           arrayProducts.push(id,name,price,image);

          return arrayProducts;
        }
        console.log(addProducts());

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
         //    addProduct(teddyId);     
         addProduct(arrayProducts);
             e.preventDefault();
         })
       })
})


