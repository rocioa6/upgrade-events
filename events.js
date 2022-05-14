//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
/* let newButton = document.createElement("button");
newButton.id = 'btnToClick';
document.body.appendChild(newButton); */
let clickInput = document.querySelector('.click');
clickInput.id ="btnToClick";

let handleClick = function(event) {
    console.log(event);
 }
 document.getElementById("btnToClick").addEventListener("click", handleClick);

 let eventFocus = function(event) {
    console.log(event.target.value)};

document.querySelector(".focus").addEventListener("focus", eventFocus);

let eventInput = function(event) {
    console.log(event.target.value)};

document.querySelector(".value").addEventListener("input", eventInput);