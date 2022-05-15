/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Ana',
	idade: 70,
};

const pessoa2 = {
	nome: 'Joao',
	idade: 31,
};

const pessoa3 = {
	nome: 'Felipe',
	idade: 20,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));