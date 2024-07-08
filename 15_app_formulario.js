// SCRIPT DO FORMULÁRIO DO USUÁRIO

// Colocar elementos do DOM em variáveis
const meuForm = document.querySelector("#meu-formulario");
const entradaNome = document.querySelector("#name");
const entradaEmail = document.querySelector("#email");
const mensagem = document.querySelector(".mensagem");
const listaUsuários = document.querySelector("#users");

// Ouvir envio do formulário
meuForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (entradaNome.value === "" || entradaEmail.value === "") {
        // alert('Por favor, preencha todos os campos');
        mensagem.classList.add("error");
        mensagem.innerHTML = "Por favor, preencha todos os campos";

        // Remover erro após 3 segundos
        setTimeout(() => mensagem.remove(), 3000);
    } else {
        // Criar novo item de lista com o usuário
        const li = document.createElement("li");

        // Adicionar nó de texto com valores de entrada
        li.appendChild(
            document.createTextNode(
                `${entradaNome.value}: ${entradaEmail.value}`
            )
        );

        // Adicionar HTML
        // li.innerHTML = `<strong>${entradaNome.value}</strong>e: ${entradaEmail.value}`;

        // Anexar à ul
        listaUsuários.appendChild(li);

        // Limpar campos
        entradaNome.value = "";
        entradaEmail.value = "";
    }
}
