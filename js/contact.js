
let firstNameValue = document.getElementById("firstName");
let lastNameValue = document.getElementById("lastName");
let mailValue = document.getElementById("email");
let addressValue = document.getElementById("address");
let cityValue = document.getElementById("city");
let form = document.getElementById("poster");
let envoyer = document.getElementById("envoyer");

const alertFirstName = document.querySelector(".alertFirstName");
const alertLastName = document.querySelector(".alertLastName");
const alertMail = document.querySelector(".alertEmail");
const alertAddress =document.querySelector(".alertAddress");
const alertCity = document.querySelector(".alertCity");

firstNameValue.addEventListener("input", function(event){

    if(!firstNameValue.validity.valid) {
        alertFirstName.innerHTML = "Le champs Nom n\'est pas valide";
    }
    if(firstNameValue.value === "") {
        alertFirstName.innerHTML = "Veuillez remplir le champs Nom"; 
    }
   else if(firstNameValue.validity.valid) {
        alertFirstName.innerHTML = "";
    }

}, false)

lastNameValue.addEventListener("input", function(event){
    if(!lastNameValue.validity.valid) {
        alertLastName.innerHTML ="Le champs Prénom n\'est pas valide";
    }
    if(lastNameValue.value === "") {
       alertLastName.innerHTML = "Veuillez remplir le champs Prénom"; 
    }
    else if(lastNameValue.validity.valid) {
        alertLastName.innerHTML = "";
    }

}, false)

mailValue.addEventListener("input", function(event){
    if(!mailValue.validity.valid) {
        alertMail.innerHTML ="Le champs Email n\'est pas valide";
    }
    if(mailValue.value === "") {
        alertMail.innerHTML = "Veuillez remplir le champs  Email"; 
    }
    else if(mailValue.validity.valid) {
        alertMail.innerHTML = "";
    }

},false)

addressValue.addEventListener("input", function(event){
    if(!addressValue.validity.valid) {
        alertAddress.innerHTML ="Le champs Ville n\'est pas valide";
    }
    if(addressValue.value === "") {
        alertAddress.innerHTML = "Veuillez remplir le champs Ville"; 
    }
    else if(addressValue.validity.valid) {
        alertAddress.innerHTML = "";
    }

},false)

cityValue.addEventListener("input", function(event){
    if(!cityValue.validity.valid) {
        alertCity.innerHTML ="Le champs Ville n\'est pas valide";
    }
    if(cityValue.value === "") {
        alertCity.innerHTML = "Veuillez remplir le champs Ville"; 
    }
    else if(cityValue.validity.valid) {
        alertCity.innerHTML = "";
    }

},false)

if(form) {
    form.addEventListener("submit", function (e){
        let form_Valid = true;
        let valeur = e.target.value;
        console.log(valeur);
        if(!lastNameValue.validity.valid || lastNameValue.value === "") {
            form_Valid = false
            console.log("erreur nom");
            e.preventDefault();
        } 
        if(!firstNameValue.validity.valid || firstNameValue.value === "") {
            form_Valid = false
            console.log("erreur prénom");
            e.preventDefault();
        }
        if(!mailValue.validity.valid || mailValue.value === "") {
            form_Valid = false
            console.log("erreur mail");
            e.preventDefault();
        }
        if(!addressValue.validity.valid || addressValue.value === "") {
            console.log("erreur adresse");
            addressValue.innerHTML ='Erreur adresse';
            form_Valid = false;
            e.preventDefault();
        }
        if(!cityValue.validity.valid || cityValue.value === "") {
            console.log("erreur city");
            addressValue.innerHTML ='Erreur lastname';
            e.preventDefault();
            form_Valid = false;
        }
        if(!form_Valid) {
            console.log("formulaire invalide");
            e.preventDefault();
        }
        else {
            let contact = new Object();
                contact.firstName = firstNameValue.value;
                contact.lastName = lastNameValue.value;
                contact.email = mailValue.value;
                contact. address = addressValue.value;
                contact.city = cityValue.value;
    
                addContact(contact);
             
        }
    });
    
}
   

