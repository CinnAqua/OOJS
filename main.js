const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum")
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vruum")
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log("acelerar")
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019)
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020)

const nome = "Miguel"
const idade = 22
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "js"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof ehMaiorDeIdade)
console.log(typeof conhecimentos)
console.log(typeof pessoa)

console.log(carroDaMaria2 instanceof Carro)
console.log(conhecimentos instanceof Array)

console.log(pessoa.nome)

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('idade')

pessoa.sobrenome = 'Cabral Peres'

Object.freeze(pessoa)

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log("tem sobrenome")
}

console.log(Object.keys(pessoa).length)
console.log(Object.values(pessoa))