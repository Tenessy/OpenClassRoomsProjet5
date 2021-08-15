function getUrl() {
   let Url = new URL(window.location);
    Url.pathname="produit/produit.html";
    const searchId = Url.searchParams.get("id"); 
    console.log(searchId);

    return searchId; //retourne l'id contenu dans l'URL;
}
function isValid(value) {
    return /^[a-zA-Z]+$/.test(value);
}
function isValidMail(value) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(value);
}
function isValidAdress(value) {
   return /^[0-9]{1,} [a-zA-Z]{3,} [a-zA-Z]{2,}/.test(value);
}
/*
firstNameValue.addEventListener('input', function(e){
    let valeur = e.target.value;
    if (!isValid(valeur)) {
        console.log("Veuillez entrer des caractères valides");
        e.preventDefault();
    }
    else {
       console.log("Tout est bon");
       contact.firstName = valeur;
       console.log(contact.firstName);
    }
},false)
lastNameValue.addEventListener("input", function(e) {
   let valeur = e.target.value;
    if (!isValid(valeur)) {
      console.log("Veuillez entrer des caractères valides");
      e.preventDefault();
    }
    else {
      console.log("Tout est bon");
      contact.lastName = valeur;
      console.log(contact.lastName);
    }
},false)
mailValue.addEventListener("input", function(e){
    let valeur = e.target.value;
    if (!isValidMail(valeur)) {
      console.log("Veuillez entrer des caractères valides");
      e.preventDefault();
    }
   else {
      console.log("Tout est bon");
      contact.mail= valeur;
      console.log(contact.mail);
      console.log(contact);
    }
},false)
adressValue.addEventListener("input", function(e) {
   let valeur = e.target.value;
    if (!isValidAdress(valeur)) {
      console.log("Veuillez entrer des caractères valides");
      e.preventDefault();
    }
    else {
      console.log("Tout est bon");
      contact.adress = valeur;
      console.log(contact.adress);
    }
},false)
cityValue.addEventListener("input", function(e) {
   let valeur = e.target.value;
    if (!isValid(valeur)) {
      console.log("Veuillez entrer des caractères valides");
      e.preventDefault();
    }
    else {
       console.log("Tout est bon");
       contact.city = valeur;
      console.log(contact.city);
   }
},false)
*/