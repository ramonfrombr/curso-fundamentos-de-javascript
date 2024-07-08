// VETORES - Armazenar múltiplos valores em uma variável
const números = [1, 2, 3, 4, 5];
const frutas = ["maçãs", "laranjas", "peras", "uvas"];
console.log(números, frutas);

// Obter um valor - Vetores começam em 0
console.log(frutas[1]);

// Adicionar valor
frutas[4] = "melancia";

// Adicionar valor usando push()
frutas.push("morangos");

// Adicionar ao início
frutas.unshift("mangas");

// Remover último valor
frutas.pop();

// Remover primeiro valor
frutas.shift();

// Verificar se é array
console.log(Array.isArray(frutas));

// Obter índice
console.log(frutas.indexOf("laranjas"));
