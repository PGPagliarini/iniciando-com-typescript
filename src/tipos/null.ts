type Usuario = { nome: string; email: string }

const usuarios: Usuario[] = [
    { nome: 'Paulo', email: 'paulo@gmail.com' },
    { nome: 'Mateus', email: 'mateus@gmail.com' },
    { nome: 'Marcos', email: 'marcos@gmail.com' },
    { nome: 'Lucas', email: 'lucas@gmail.com' },
    { nome: 'João', email: 'joao@gmail.com' },
    { nome: 'Filipo', email: 'filipo@gmail.com' },
]

function buscarPorEmail(email: string): Usuario | null {
    return usuarios.find(u => u.email === email) ?? null
}

console.log(buscarPorEmail('paulo@gmail.com'))
console.log(buscarPorEmail('bella@gmail.com'))