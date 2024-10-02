interface Entidade {
    id: string
}


interface EntidadeComDatas extends Entidade {
    criadoEm?: Date // createdAt
    atualizadoEm: Date //updatedAt
    excluidoEm?: Date //deletedAt
}

interface Usuario extends EntidadeComDatas {
    nome: string
    email: string
    senha?: string
}

// Exemplo de Usuário
const u1: Usuario = {
    id: 'aaa-123',
    nome: 'Paulo',
    email: 'paulo@pmail.com',
    criadoEm: new Date(),
    atualizadoEm: new Date()
}

console.log(u1)

// Exemplo de Produto

interface Vendavel {
    preco: number
    desconto: number
}

interface Produto extends EntidadeComDatas, Vendavel {
    nome: string
}

const p1: Produto = {
    id: 'def-456',
    nome: 'Jordan',
    preco: 999,
    desconto: 0.03,
    atualizadoEm: new Date()
}

console.log(p1)

export {}