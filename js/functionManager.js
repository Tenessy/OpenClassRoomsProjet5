
function addTeddy(teddyId) {
    recupId(teddyId);   
}

function recupId(getId) {
    localStorage.setItem("teddyId", JSON.stringify(getId));
}

function afficheId() {
    let id = localStorage.getItem("teddyId");
        if(id == null) {
            console.log("hey");
            return[];    
        }
        else {
            console.log(JSON.parse(id));
            return JSON.parse(id);     
        }
   
}

function recupColor(color) {
    return color;
}

 function url() {
      let url = new URL(window.location);
      url.pathname="produit/produit.html";// Url de base de la page 
      const id = afficheId();
      url.searchParams.append("id", id);// ajoute un paramètre id avec l'id de l'ours en paramètre

      return url;    
      
 }

 function getUrl() {
    const id = url().searchParams.get("id"); // retourne l'identifiant de l'ours passé dans l'url
    return id;
 }



 
 
