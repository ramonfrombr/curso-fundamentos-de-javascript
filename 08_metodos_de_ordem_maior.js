// MÉTODOS DE VETORES DE ORDEM MAIOR (mostrar protótipo)

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

// forEach() - Percorre vetor
// a função passada para forEach recebe 3 argumetos:
// 1. O item do vetor da iteração
// 2. O índice do item
// 3. O próprio vetor
tarefas.forEach(function (tarefa, i, minhasTarefas) {
    console.log(`${i + 1}: ${tarefa.texto}`);
    console.log(minhasTarefas);
});

// map() - Percorre e cria novo array
const vetorDeTextosDasTarefas = tarefas.map(function (tarefa) {
    return tarefa.texto;
});

console.log(vetorDeTextosDasTarefas);

// filter() - Filtra vetor com base em condição
const tarefa1 = tarefas.filter(function (tarefa) {
    // Retorna apenas tarefas onde o id é 1
    return tarefa.id === 1;
});
