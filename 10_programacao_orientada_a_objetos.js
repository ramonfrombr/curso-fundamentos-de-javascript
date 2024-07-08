// OOP

// Função Construtora
function Pessoa(primeiroNome, sobrenome, dataNascimento) {
    // Definir propriedades do objeto
    this.primeiroNome = primeiroNome;
    this.sobrenome = sobrenome;
    this.dataNascimento = new Date(dataNascimento); // Definir como objeto de data real usando o construtor Date
}

// Definindo método para obter ano de nascimento
Pessoa.prototype.obterAnoNascimento = function () {
    return this.dataNascimento.getFullYear();
};

// Definindo método para obter nome completo
Pessoa.prototype.obterNomeCompleto = function () {
    return `${this.primeiroNome} ${this.sobrenome}`;
};

// Instanciar um objeto da classe
const pessoa1 = new Pessoa("João", "Silva", "7-8-80");
const pessoa2 = new Pessoa("Maria", "Santos", "8-2-90");

console.log(pessoa2);
console.log(pessoa1.obterAnoNascimento());
console.log(pessoa1.obterNomeCompleto());

// Construtores internos
const nome = new String("Kevin");
console.log(typeof nome); // Mostra 'Objeto'
const num = new Number(5);
console.log(typeof num); // Mostra 'Objeto'
