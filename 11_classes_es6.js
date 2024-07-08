// CLASSES ES6
class Pessoa {
    constructor(primeiroNome, sobrenome, dataNascimento) {
        this.primeiroNome = primeiroNome;
        this.sobrenome = sobrenome;
        this.dataNascimento = new Date(dataNascimento);
    }

    // Obter Ano de Nascimento
    obterAnoNascimento() {
        return this.dataNascimento.getFullYear();
    }

    // Obter Nome Completo
    obterNomeCompleto() {
        return `${this.primeiroNome} ${this.sobrenome}`;
    }
}

const pessoa1 = new Pessoa("João", "Silva", "7-8-80");
console.log(pessoa1.obterAnoNascimento());
