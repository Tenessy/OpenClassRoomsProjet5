const productId = productsId();
const objContact = getContact();
 console.log(productId);

//const formContact = formContacts();

function returnContact(contact) {
  return contact;
}
//console.log(formContacts);
//console.log(formContacts);

//console.log(productsId());
//const formContact = formControlContact();
    
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
        document.querySelector(".container").innerHTML +=
        `<div class="card" style="width: 18rem;">
        <img src="${product.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${product.price}€</h6>
        </div>
      </div></br>`
    })

    document.getElementById("orderId").innerHTML = 'Numéro de commande:' + orders.orderId;
    document.getElementById("orderCustomer").innerHTML = 
    " Merci " + orders.contact.firstName + " pour votre commande chez Orinoco !";
    document.getElementById("somme").innerHTML = getSum();
 });
   

