// FUNÇÕES
function cumprimentar(saudacao = "Olá", nome) {
    if (!nome) {
        // console.log(saudacao);
        return saudacao;
    } else {
        // console.log(`${saudacao} ${nome}`);
        return `${saudacao} ${nome}`;
    }
}

// FUNÇÕES SETA
const cumprimentar = (saudacao = "Olá", nome = "Você") => `${saudacao} ${nome}`;
console.log(cumprimentar("Oi"));
