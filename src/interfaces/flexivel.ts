interface Flexivel {
    nome: string,
    [chave: string]: number | string
}

const f1: Flexivel = {
    nome: 'Teste',
    idade: 44,
    salario: 12345,
}

console.log(f1.nome)
console.log(f1.idade)
console.log(f1.salario)

export {}