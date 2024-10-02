import Validador from "./validador"

class Produto {
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number = 0,
    ) {
        Validador.maiorQueZero(id, 'Id inválido')
        Validador.tamanhoEntre(nome, 3, 250, 'Nome inválido')
        Validador.maiorQueZero(preco, 'Preço inválido')
        Validador.entre(desconto, 0, 0.8, 'Desconto inválido')
        // if(nome.length < 2) throw new Error('Nome pequeno')
        // if(nome.length > 250) throw new Error('Nome grande')
        // if(preco <= 0) throw new Error('Preço inválido')
        // if(desconto < 0 || desconto > 0.8) throw new Error('Desconto inválido')
    }

    get precoFinal() {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto(1, 'Lápis', 5.50, 0.2)
console.log(p1.nome, p1.precoFinal)

const p2 = new Produto(2, 'Caneta', 8.25, 0.4)
console.log(p2.nome, p2.precoFinal)

const p3 = new Produto(3, 'MacBook', 11499.99, 0.12)
console.log(p3.nome, p3.precoFinal)

console.log(Validador.ERRO_DESCONHECIDO)

export {}