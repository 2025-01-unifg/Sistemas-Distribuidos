let clientes = [
  {nome: 'João', idade: 20},
  {nome: 'Maria', idade: 30},
  {nome: 'José', idade: 40},
  {nome: 'Pedro', idade: 50},
  {nome: 'Paulo', idade: 60},
  {nome: 'Marcos', idade: 70},
  {nome: 'Lucas', idade: 80},
  {nome: 'Mateus', idade: 90},
  {nome: 'João', idade: 100},
  {nome: 'Maria', idade: 110},
  {nome: 'José', idade: 120},
  {nome: 'Pedro', idade: 130}
]

clientes.map((cliente, index) => {
    console.log(`${index+1} - Nome: ${cliente.nome} - Idade: ${cliente.idade}`)
})