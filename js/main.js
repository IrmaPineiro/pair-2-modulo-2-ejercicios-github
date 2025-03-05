"use strict"
/*
Seleccionar la usuaria va a hacer click
Cuando la usuaria haga click
    se cambie la cara(contenido) y sea un guiño
*/
const head = document.querySelector(".js-head")
const face = document.querySelector(".js-face")
function handleClick(event) {
    event.preventDefault();
    face.innerHTML = ";)"
}
head.addEventListener("click", handleClick);
