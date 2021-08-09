let contact = {
    firstName,
    lastName,
    mail,
    adress,
    city,    
}
const firstNameValue = document.getElementById("firstName");
const lastNameValue = document.getElementById("lastName");
const mailValue = document.getElementById("mail");
const adressValue = document.getElementById("adress");
const cityValue = document.getElementById("city");
const form = document.getElementById("poster");
  
form.addEventListener("submit", function (e){
    console.log(lastNameValue);
    if(!lastNameValue.validity.valid || lastNameValue.value == "") {
        console.log("erreur lastname");
        lastNameValue.innerHTML ='Erreur lastname';
        e.preventDefault();
    }
    else {
        console.log("tout est ok");
    }
    if(!firstNameValue.validity.valid || firstNameValue.value == "") {
        console.log("erreur lastname");
        firstNameValue.innerHTML ='Erreur lastname';
        e.preventDefault();
    }
    else {
        console.log("tout est ok");
    }
    if(!mailValue.validity.valid || mailValue.value == "") {
        console.log("erreur lastname");
        mailValue.innerHTML ='Erreur lastname';
        e.preventDefault();
    }
    else {
        console.log("MAIL est ok");
    }
    if(!adressValue.validity.valid || adressValue.value == "") {
        console.log("erreur adresse");
        adressValue.innerHTML ='Erreur adresse';
        e.preventDefault();
    }
    else {
        console.log("adress est ok");
    }
    if(!cityValue.validity.valid || cityValue.value == "") {
        console.log("erreur city");
        adressValue.innerHTML ='Erreur lastname';
        e.preventDefault();
    }
    else {
        console.log("Ville est ok");
    }
})
