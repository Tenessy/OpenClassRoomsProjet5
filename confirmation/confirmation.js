const productId = productsId();
const objContact = getContact();
const getSomme = getSum();
const paniers = getPanier();
const dateDuJour = duJour();
document.querySelector(".nbr_article").innerHTML = paniers.length;

fetch("http://localhost:3000/api/teddies/order",
  {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contact: objContact, products: productId }),

  })
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
    else {
      console.log("La résulat n'a pas pu être renvoyé");
    }
  })
  .then(orders => {
    console.log(orders.products);
    console.log(paniers.length);
    if (paniers.length === 0) {
      document.getElementById("structurer").innerHTML = "Le panier est vide";
      console.log("ok")
    }
    else {
      orders.products.forEach(product => {
        document.querySelector(".cartes").innerHTML +=
          `<div class="confirmation_size">
          <img src="${product.imageUrl}" class="card-img-top confirmation_size__img"  alt="...">
          <div class="card-body">
           <h5 class="card-title kalam gras">${product.name}</h5>
           <h5>Qté: 1</h5>
           <h6 class="card-subtitle primary gras">${product.price.toLocaleString()}€</h6>
          </div>
        </div>
        <div class="confirmation__border_inf"></div></br>`
      });
      document.getElementById("orderId").innerHTML = `<h3>Commande n°: <strong>${orders.orderId}</strong></h3>
      <h4>Effectué le <strong>${dateDuJour}</strong></h4>`;
      document.getElementById("orderCustomer").innerHTML =
        `<h1> Félicitations <strong>${orders.contact.lastName}</strong> pour votre commande chez Orinoco !</h1>`;

      document.querySelector(".containPrix").innerHTML = `<p>Sous-total des articles: ${getSomme}<br>
      Frais d'envoie: 0€<br>
      Total HT: ${getSomme}<br>
      <strong>Montant total de la commande: <mark class="primary">${getSomme}</mark></strong></p> `;

      document.querySelector(".envoieMail").innerHTML = `Un E-mail de confirmation vous a été 
      envoyé à l'adresse suivante: <strong>${orders.contact.email}.</strong><br>
      À bientôt !`;

      document.querySelector(".livraison").innerHTML = `<h4 class="kalam">Votre commande sera livrée à<br>
      <strong>${orders.contact.address}</strong><br>
      <strong>${orders.contact.city}</strong></h4>`
      document.querySelector(".navbar").addEventListener("click", function (event) {
        localStorage.clear();
      });
    }
  });


