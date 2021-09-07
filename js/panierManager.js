function articlePanier(panier) {
    console.log(panier);
    ajoutArticlePanier(panier);
}

function ajoutArticlePanier(article) {
     localStorage.setItem("articlePanier", JSON.stringify(article));
}

function affichePanier() {
    let article = localStorage.getItem("articlePanier");

    if(article == null) {
        return[];
    }
    else {
        console.log(JSON.parse(article));
        return JSON.parse(article)  
    }
}
function affichePanierId() {
    return affichePanier();
}
