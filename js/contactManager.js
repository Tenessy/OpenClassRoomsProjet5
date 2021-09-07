function addContact(contact) {
    if (contact === null) {
        console.log("contact est null");
    }
    if (isNaN(contact) === false) {
        console.log("contact est un nombre");
    }
    if (contact === "") {
        console.log("contact est vide");
    }
    if (contact === undefined) {
        console.log("contact n'existe pas");
    }
    else {
        sessionStorage.setItem("contact", JSON.stringify(contact)); // ajoute un contact dans une session
    }
}

function getContact() {
    let contactStorage = sessionStorage.getItem("contact");
    if (contactStorage === null) {
        return [];
    }
    else {
        return JSON.parse(contactStorage);
    }
}