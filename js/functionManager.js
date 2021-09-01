
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
   return /[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/.test(value);
}

function duJour() {
  let today = new Date(); // créer une date
  let options = { weekday: 'long', year: 'numeric',
               month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = today.toLocaleString('fr-FR', options);
  
  return date; // retourne la date au format FR et qui contient toutes les informations contenu dans l'objet options
}
