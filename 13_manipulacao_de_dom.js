// MANIPULAÇÃO DO DOM

const ul = document.querySelector(".items");

// Remover elemento
// ul.remove();

// Remover último elemento filho
// ul.lastElementChild.remove();

// Definir o conteúdo de texto de um elemento
ul.firstElementChild.textContent = "Olá";

// Acessar os elementos filhos e
// Definir o texto interno de um elemento
ul.children[1].innerText = "Pedro";

// Definir o HTML interno de um elemento
ul.lastElementChild.innerHTML = "<h1>Olá</h1>";

// Selecionando um elemento com querySelector
const botao = document.querySelector(".btn");
botao.style.background = "red";
