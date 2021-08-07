
let value = 1;
let setItem = getProduct();

function addProduct(panier) {
  for (let i = 0; i < value; i++) {  
      setItem.push(panier);  
  }
  value++;
  localStorage.setItem("panier", JSON.stringify(setItem));  
}


function getProduct() {
 let getStorage = localStorage.getItem("panier");
 
  if(getStorage == null) {
    return [];
  }
  else {
    console.log(JSON.parse(getStorage));
    return JSON.parse(getStorage); 
  }   
}
