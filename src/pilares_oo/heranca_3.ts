interface Usuario {
    id: number
    nome: string
    email: string
    senha?: string
}

interface CasoDeUso {
    executar(entrada: any): any
}

class RegistrarUsuario implements CasoDeUso {
    executar(usuario: Usuario) {
        console.log('Executando registrar usuario')
        console.log(usuario)
    }
}

const u1: Usuario = {
    id: 321,
    nome: 'Marina',
    email: 'mah@gmail.com',
    senha: '12345'

}
const casoDeUso: CasoDeUso = new RegistrarUsuario()
casoDeUso.executar(u1)

export {}