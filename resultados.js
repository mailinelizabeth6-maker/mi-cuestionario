let correctas = localStorage.getItem("correctas");
let incorrectas = localStorage.getItem("incorrectas");

document.getElementById("correctas").textContent =
"Respuestas correctas: " + correctas;

document.getElementById("incorrectas").textContent =
"Respuestas incorrectas: " + incorrectas;