
let firstNameValue = document.getElementById("firstName");
let lastNameValue = document.getElementById("lastName");
let mailValue = document.getElementById("email");
let addressValue = document.getElementById("address");
let cityValue = document.getElementById("city");
let form = document.getElementById("poster");
let envoyer = document.getElementById("envoyer");
if(form) {
    form.addEventListener("submit", function (e){
        console.log(lastNameValue);
        let form_Valid = true;
        if(!lastNameValue.validity.valid || lastNameValue.value == "") {
            console.log("erreur lastname");
            lastNameValue.innerHTML ='Erreur lastname';
            form_Valid = false
            e.preventDefault();
        }
        if(!firstNameValue.validity.valid || firstNameValue.value == "") {
            console.log("erreur lastname");
            firstNameValue.innerHTML ='Erreur lastname';
            form_Valid = false
            e.preventDefault();
        }
        if(!mailValue.validity.valid || mailValue.value == "") {
            console.log("erreur lastname");
            mailValue.innerHTML ='Erreur lastname';
            form_Valid = false
            e.preventDefault();
        }
        if(!addressValue.validity.valid || addressValue.value == "") {
            console.log("erreur adresse");
            addressValue.innerHTML ='Erreur adresse';
            form_Valid = false;
            e.preventDefault();
        }
        if(!cityValue.validity.valid || cityValue.value == "") {
            console.log("erreur city");
            addressValue.innerHTML ='Erreur lastname';
            e.preventDefault();
            form_Valid = false;
        }
        if(!form_Valid) {
            console.log("formualaire invalide");
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
   

