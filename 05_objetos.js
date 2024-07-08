// OBJETOS LITERAIS
const pessoa = {
    primeiroNome: "Ramon",
    idade: 18,
    passatempos: ["música", "filmes", "esportes"],
    endereco: {
        rua: "Avenida dos Cravos",
        cidade: "Serra",
        estado: "ES",
    },
};

// Acessar uma propriedade
console.log(pessoa.nome);

// Acessar um elemento de uma propriedade vetor
console.log(pessoa.passatempos[1]);

// Acessar uma propriedade de uma propriedade
console.log(pessoa.endereco.cidade);

// Definir nova propriedade
pessoa.email = "jdoe@gmail.com";

// Vetor de objetos
const tarefas = [
    {
        id: 1,
        texto: "Tirar o lixo",
        completo: false,
    },
    {
        id: 2,
        texto: "Jantar com esposa",
        completo: false,
    },
    {
        id: 3,
        texto: "Reunião com chefe",
        completo: true,
    },
];

// Acessar propriedade de um elemento específico
console.log(tarefas[1].texto);

// Formatar como JSON
console.log(JSON.stringify(tarefas));
