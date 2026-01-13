
/* Capturar los elementos*/
let inptTituloLibro = document.querySelector("#tituloLibro")
let inptAutorLibro = document.querySelector("#autorLibro")
let inptIsbnLibro = document.querySelector("#isbnLibro")
let btnAgregarLibro = document.querySelector("#btnAgregarLibro")

let librosDisponibles = JSON.parse(localStorage.getItem("librosDisponibles")) || [];

/* 02 Manipulacion de los eventos */
/*
{
  isbn: "978-0307474278",
  titulo: "El Código Da Vinci",
  autor: "Dan Brown",
  estado: "disponible" // "disponible" o "prestado"
}


/* capturamos los valores*/
btnAgregarLibro.addEventListener("click", agregarLibro)
    
    
function agregarLibro() {
    let titulo = inptAutorLibro.value.trim()
    let autor = inptAutorLibro.value.trim()
    let isbn = inptIsbnLibro.value.trim()

/* Validacion de los campos  obligatorios*/
    if (titulo === "" || autor === "" || isbn === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

/* Creamos el objeto libro */
let libroNuevo = {
    isbn: isbn,
    titulo: titulo,
    autor: autor,
    estado: "disponible"
}
/* Agregamos el libro al array y lo guardamos en localStorage */
librosDisponibles.push(libroNuevo);
localStorage.setItem("librosDisponibles", JSON.stringify(librosDisponibles));

console.log(librosDisponibles);
// Limpiamos los campos
inptTituloLibro.value = ""
inptAutorLibro.value = ""
inptIsbnLibro.value = ""

// validacion del formulario
alert("Libro agregado correctamente")

}
