// Classe Abstrata
abstract class Celular {
    ligar() {
        console.log('Em ligação')
    }

    abstract accessarRedeMovel(): void
}

// Classe Concreta
class Iphone23Pro extends Celular {
    accessarRedeMovel(): void {
        console.log('Usando rede 7.5G')
    }
}
class GalaxyS57Ultra extends Celular {
    accessarRedeMovel(): void {
        console.log('Usabdi rede 12G')
    }
}

let c1 = new GalaxyS57Ultra()
c1.ligar()
c1.accessarRedeMovel()

c1 = new Iphone23Pro()
c1.ligar()
c1.accessarRedeMovel()

export {}