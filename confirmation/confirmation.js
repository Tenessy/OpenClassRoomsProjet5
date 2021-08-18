const productId = productsId();
const objContact = getContact();
 
fetch("http://localhost:3000/api/teddies/order", 
{
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contact: objContact, products: productId }),

})
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
 .then(orders => {
     console.log(orders.products);
    orders.products.forEach(product => {
        document.querySelector(".carte").innerHTML +=
        `<div class="confirmation_size">
          <img src="${product.imageUrl}" class="card-img-top confirmation_size__img"  alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h5>Qté: 1</h5>
          <h6 class="card-subtitle mb-2 text-muted">${product.price}€</h6>
        </div>
      </div></br>`
    })

    document.getElementById("orderId").innerHTML = `<div class="h6">Numéro de commande: ${orders.orderId}</div>`;
    document.getElementById("orderCustomer").innerHTML = 
    `<div class= "alert alert-success" role="alert"> Félicitations ${orders.contact.firstName} pour votre commande chez Orinoco !</div>`;
    document.getElementById("somme").innerHTML = getSum();
    document.querySelector(".envoieMail").innerHTML = `Un E-mail de confirmation vous a été 
    envoyé à l'adresse suivant: ${orders.contact.email}`;

 });
   

