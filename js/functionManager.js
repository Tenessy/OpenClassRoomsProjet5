
function getUrl(id) {
    let Url = new URL(window.location);
    Url.pathname = "produit/produit.html";
    const searchId = Url.searchParams.get("id");
    console.log(id);
    if (Url.searchParams.has("id")) {
        return searchId; //retourne l'id contenu dans l'URL;
    }
    else {
        console.log("l'id n'est pas trouvé");
    }
}

function duJour() {
    let today = new Date(); // créer une date
    let options = {
        weekday: 'long', year: 'numeric',
        month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
    }
    const date = today.toLocaleString('fr-FR', options); // transforme la date au format local
    if (isNaN(Date.now(date)) === false) {  // Vérifie que la date renvoie un nombre
        return date; // retourne la date au format FR et qui contient toutes les informations contenu dans l'objet options
    }
    else {
        console.log("La date n'est pas valide");
    }

}
