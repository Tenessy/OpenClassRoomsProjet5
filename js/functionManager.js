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

function duJour() {
  let today = new Date();
  const jours = today.getDate();
  const mois = today.getMonth();
  const annee = today.getFullYear();
  const tabMois = ["janvier", "février", "mars", "avril", 
  "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  let heure = today.getHours();
  let minutes = today.getMinutes();
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
