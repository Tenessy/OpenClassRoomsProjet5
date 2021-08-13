function addContact(contact) {
    sessionStorage.setItem("contact", JSON.stringify(contact));
}
function getContact() {
    const contact = sessionStorage.getItem("contact");

    return JSON.parse(contact);
}