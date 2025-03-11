function soma(a, b) {
  console.log(`Somando ${a} + ${b}`)
  return a + b
}

function subtracao(a, b) {
  console.log(`Subtraindo ${a} - ${b}`)
  return a - b
}

function multiplicacao(a, b) {
  console.log(`Multiplicando ${a} * ${b}`)
  return a * b
}

function divisao(a, b) {
  console.log(`Dividindo ${a} / ${b}`)
  if (b === 0) {
    console.log('Não é possível dividir por zero')
    return null
  }
  return a / b
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao
}