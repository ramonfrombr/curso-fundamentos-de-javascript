// EVENTOS

const botao = document.querySelector(".btn");

// Evento do Mouse
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById("meu-formulario").style.background = "#ccc";
    document.querySelector("body").classList.add("bg-dark");
    ul.lastElementChild.innerHTML = "<h1>Alterado</h1>";
});

// Evento do Teclado
const entradaNome = document.querySelector("#name");
entradaNome.addEventListener("input", (e) => {
    document.querySelector(".container").append(entradaNome.value);
});
