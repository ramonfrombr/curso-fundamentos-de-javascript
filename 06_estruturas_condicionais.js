// CONDICIONAIS

// Declaração de If/Else Simples
const x = 30;

if (x === 10) {
    console.log("x é 10");
} else if (x > 10) {
    console.log("x é maior que 10");
} else {
    console.log("x é menor que 10");
}

// Switch
cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("a cor é vermelho");
    case "azul":
        console.log("a cor é azul");
    default:
        console.log("a cor não é vermelho nem azul");
}

// Operador ternário / if abreviado
const z = cor === "vermelho" ? 10 : 20;
