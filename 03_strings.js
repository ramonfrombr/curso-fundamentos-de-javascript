// STRINGS

const nome = "Ramon";
const idade = 27;

// Concatenação
console.log("Meu nome é " + nome + " e eu tenho " + idade);

// Template literal (melhor)
console.log(`Meu nome é ${nome} e eu tenho ${idade}`);

// Métodos e propriedades de strings
const s = "Olá Mundo";
let val;

// Obter comprimento
val = s.length;

// Alterar caixa
val = s.toUpperCase();
val = s.toLowerCase();

// Obter fatiam de string
val = s.substring(0, 5);

// Dividir em vetor
val = s.split("");
