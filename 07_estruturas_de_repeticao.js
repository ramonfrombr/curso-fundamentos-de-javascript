// LOOPS

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

// Para
for (let i = 0; i <= 10; i++) {
    console.log(`Número da repetição for: ${i}`);
}

// Enquanto
let i = 0;
while (i <= 10) {
    console.log(`Número da repetição while: ${i}`);
    i++;
}

// Percorrer Vetores

// Loop For
for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].texto}`);
}

// Loop For...of
for (let tarefa of tarefas) {
    console.log(tarefa.texto);
}
