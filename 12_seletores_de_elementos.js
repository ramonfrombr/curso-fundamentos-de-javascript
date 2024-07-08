// SELETORES DE ELEMENTOS

// Seletores de Elemento Único
console.log(document.getElementById("meu-formulario"));

// Seletores de Múltiplos Elementos
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("item"));

// Seletores de consulta
console.log(document.querySelector(".container"));
console.log(document.querySelectorAll(".item"));

const itens = document.querySelectorAll(".item");
itens.forEach((item) => console.log(item));
