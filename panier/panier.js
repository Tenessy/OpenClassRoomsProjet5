function getProduct() {
    let getStorage = localStorage.getItem("panier");
    
     if(getStorage == null) {
       return [];
     }
     else {
       console.log(JSON.parse(getStorage));
       return JSON.parse(getStorage); 
     }   
   }
   var contact = {
    firstName: 'Jean',
    lastName: 'Eric',
    mail: 'eric.dupond@outlook.fr',
    adress: '3 rue du bourg',
    city: 'Rennes',    
}
console.log(contact);
console.log(getProduct());


fetch("http://localhost:3000/api/teddies/order", 
{
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({products: getProduct()}, contact)

})
.then(res => res.json())
 .then(json => console.log(json));

 /*.then(listPanier => {
     for(let Panier of listPanier) {
         let Teddypanier = new Teddy(Panier);

        document.querySelectorAll(".panierTeddy").forEach(panier => {
            panier.addEventListener("click", function(e) {
                document.querySelector(".card").innerHTML += 
            `<div class="card" style="width: 18rem;">
                <img src="${Teddypanier.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${Teddypanier.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${Teddypanier.price}€</h6>
                  <span class="couleur">${recupColor()}</span>
                </div>
            </div>`

            })
        
        })
     }
 })
*/