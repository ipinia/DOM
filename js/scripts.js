//querySelector
const heading = document.querySelector(".header__texto h2"); //0 o 1 elementos
//el error Null tiene origen en un mal nombre del selector
console.log(heading);

//querySelectoAll

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);

//getElementById

//generar un nuevo elemento

const nuevoEnlace = document.createElement("A");
//agregar href
nuevoEnlace.href = "nuevo-enlace.html";

//Agregar texto
nuevoEnlace.textContent = "Un nuevo enlace";

//agregar clase
nuevoEnlace.classList.add("navegacion__enlace");

/*  agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

console.log(1);

window.addEventListener("load", function() {
    console.log(2); //espera a que JS y HTML esten listos
});

window.onload = function() {
    console.log(3);
};

document.addEventListener("DOMContentLoaded", function() {
    console.log(4); //solo espera  a qu descargue el HTML, no CSS o img
});

console.log(5);*/

//Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(evento) {
//     console.log(evento);
//     evento.preventDefault();
// });
// console.log("enviando formulario");

//Evento de submit

//Eventos en los inputs y los textAreas

const datos = {
    nombre: "",
    email: "",
    mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    //Validar el formulario

    const { nombre, email, mensaje } = datos;

    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return; //Corta la ejecución del código
    }
    //crear alerta de enviar correctamente

    mostrarAlerta("Mensaje enviado correctamente");
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value; //seleccina primero el target con id y le manda el valor con value
    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundos

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}