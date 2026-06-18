const boton = document.getElementById("boton");
const menu = document.getElementById("ListaNav");

boton.addEventListener("click", () => {
    menu.classList.toggle("activo");
});