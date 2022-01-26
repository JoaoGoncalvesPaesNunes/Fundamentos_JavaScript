function soma(numero1, numero2) {
  return numero1 + numero2;
}

// console.log(soma(4, 4))
// console.log(soma(2, 2))
// console.log(soma(5, 5))


// Parâmetros x Argumentos

// Ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(nomeIdade(19, 'João'))

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2
}

console.log(multiplica(soma(2, 3), soma(2, 3)))

console.log(multiplica(soma(2, 3)))
