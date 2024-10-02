// type ContaCorrente (numero, saldo, funcao movimentar)
// type Cliente (nome, email, lista de contas[])

// const clientes: Clientes[] = [ ... ]

// function movimentarConta(numConta: number, valor: number)

// console.log(...)

type ContaCorrente = {
    numero: number,
    saldo: number,
    movimentar: (valor: number) => void
}

type Cliente = {
    nome: string,
    email: string,
    contas: ContaCorrente[]
}

function movimentar(this: ContaCorrente, valor: number) {
    this.saldo += valor
}

const clientes: Cliente[] = [
    {
        nome: 'Bella',
        email: 'bella@pmail.com',
        contas: [
            { numero: 1234, saldo: 0, movimentar },
            { numero: 4321, saldo: 123.55, movimentar },
        ],
    },
    {
        nome: 'Gabriel',
        email: 'gabriel@pmail.com',
        contas: [
            { numero: 7777, saldo: 7000000, movimentar },
            { numero: 1254, saldo: 1000.55, movimentar },
        ],
    },
]

function movimentarConta(numConta: number, valor: number) {
    const conta = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c)[0]
    conta?.movimentar(valor)
}

function consultarSaldo(numConta: number): number | null {
    const conta = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c)[0]
    return conta?.saldo ?? null
}

movimentarConta(7777, 1200.89)
console.log(consultarSaldo(7777))

movimentarConta(1234, 10000000)
console.log(consultarSaldo(1234))

movimentarConta(1234, -280000)
console.log(consultarSaldo(1234))