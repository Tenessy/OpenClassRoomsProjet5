const productId = productsId();
const objContact = getContact();
const getSomme = getSum();

let today= new Date();
const jours = today.getDate();
const mois = today.getMonth();
const annee = today.getFullYear();
const tabMois = ["janvier", "février", "mars", "avril", 
"mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
let heure = today.getHours();
let minutes = today.getMinutes();
function duJour() {
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if(minutes > 59) {
    minutes = "00";
  }
  if (heure < 10 ) {
    heure = "0" + heure;
  }
  if (heure > 23) {
    heure = "00";
  }
  return jours + " " + tabMois[mois] + " " + annee + " à " + heure + ":" + minutes;
}

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
        document.querySelector(".cartes").innerHTML +=
        `<div class="confirmation_size">
          <img src="${product.imageUrl}" class="card-img-top confirmation_size__img"  alt="...">
        <div class="card-body">
          <h5 class="card-title kalam gras">${product.name}</h5>
          <h5>Qté: 1</h5>
          <h6 class="card-subtitle primary gras">${product.price.toLocaleString()}€</h6>
        </div>
        <div class="confirmation__border_inf"></div>
      </div></br>`
    })

    document.getElementById("orderId").innerHTML = `<h4>Commande n°: <strong>${orders.orderId}</strong></h4>
    <h5>Effectué le <strong>${duJour()}</strong></h5>`;
    document.getElementById("orderCustomer").innerHTML = 
    `<div class= "alert alert-success" role="alert"> Félicitations <strong>${orders.contact.lastName}</strong> pour votre commande chez Orinoco !</div>`;
   
    document.querySelector(".containPrix").innerHTML = `<p>Sous-total des articles: ${getSomme}<br>
    Frais d'envoie: 0€<br>
    Total HT: ${getSomme}<br>
    <strong>Montant total de la commande: ${getSomme}</strong></p> `;
   
    document.querySelector(".envoieMail").innerHTML = `Un E-mail de confirmation vous a été 
    envoyé à l'adresse suivante: <strong>${orders.contact.email}.</strong><br>
    À bientôt !`;
   
    document.querySelector(".livraison").innerHTML = `<h4 class="kalam">Votre commande sera livrée à</h4>
    <strong>${orders.contact.address}</strong><br>
    <strong>${orders.contact.city}</strong>`

 });
   

