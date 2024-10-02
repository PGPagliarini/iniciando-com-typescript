import { multiplicar, multiplicarPerigosa, saudacao } from "../../src/tipos/funcoes"

test('Deve retornar uma saudação baseada na hora atual', () => {
    const s = saudacao('Paulo')
    expect(s).toBe('Olá Paulo! Passar bem!')
})

test('Deve multiplicar dois números', () => {
    const resultado = multiplicar(4, 5)
    expect(resultado).toBe(20)
})

test('Deve retornar NaN com parametro do tipo string', () => {
    const resultado = multiplicarPerigosa("a", 5)
    expect(resultado).toBeNaN()
})