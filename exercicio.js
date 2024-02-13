function Peixe(nome, familia, especie, tamanho) {
    this.nome = nome
    this.familia = familia
    this.especie = especie
    let _tamanho = tamanho

    this.getTamanho = function() {
        return _tamanho
    }

    this.setTamanho = function(valor) {
        if (typeof valor ==='number') {
            _tamanho = valor
        }
    }

    this.cresceu = function() {
        const novoTamanho = _tamanho * 1.1
        _tamanho = novoTamanho
    }

    this.dizOi = function() {
        console.log(`${this.familia}-${this.especie} ${this.nome} diz olá!`)
    }
}

function Tubarao(nome, especie, tamanho) {
    Peixe.call(this, nome, "Tubarão", especie, tamanho)
    this.cresceu = function() {
        const novoTamanho = this.getTamanho() * 1.3
        this.setTamanho(novoTamanho)
    }
}

function TubaraoTigre(nome) {
    Tubarao.call(this, nome, "Tigre", 700)
    this.cresceu = function() {
        const novoTamanho = this.getTamanho() * 1.32
        this.setTamanho(novoTamanho)
    }
}

function TubaraoTouro(nome) {
    Tubarao.call(this, nome, "Touro", 900)
    this.cresceu = function() {
        const novoTamanho = this.getTamanho() * 1.35
        this.setTamanho(novoTamanho)
    }
}

function TubaraoMartelo(nome) {
    Tubarao.call(this, nome, "Touro", 1200)
    this.cresceu = function() {
        const novoTamanho = this.getTamanho() * 1.38
        this.setTamanho(novoTamanho)
    }
}

function Raia(nome, especie, tamanho) {
    Peixe.call(this, nome, "Raia", especie, tamanho)
    this.cresceu = function() {
        const novoTamanho = this.getTamanho() * 1.2
        this.setTamanho(novoTamanho)
    }
}

function RaiaPintada(nome) {
    Raia.call(this, nome, "Pintada", 600)
    this.cresceu = function() {
        const novoTamanho = this.getTamanho() * 1.25
        this.setTamanho(novoTamanho)
    }
}

function RaiaJamanta(nome) {
    Raia.call(this, nome, "Jamanta", 1000)
    this.cresceu = function() {
        const novoTamanho = this.getTamanho() * 1.28
        this.setTamanho(novoTamanho)
    }
}

const peixe1 = new TubaraoTouro("Hibiki")
const peixe2 = new TubaraoTigre("Chris")
const peixe3 = new TubaraoTouro("Tsubasa")
const peixe4 = new RaiaPintada("Maria")
const peixe5 = new RaiaJamanta("Shirabe")
const peixe6 = new Raia("Kirika", "não-identificada", 250)

peixe1.dizOi()

peixe4.cresceu()
console.log(peixe4.getTamanho())