function addContact(contact) {
    sessionStorage.setItem("contact", JSON.stringify(contact)); // ajoute un contact dans une session
}
function getContact() {
    const contact = sessionStorage.getItem("contact");

    return JSON.parse(contact); // retourne le contact sous un objet javascrpt
}