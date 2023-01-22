

// Objeto simple ex:

const pessoa1 = {
 nome: 'Yuri',
 sobrenome: 'Faria',
 idade: 30
}

console.log(pessoa1)

// Factory ( fábricas de objetos ) ex:

function criarPessoa(nome, sobrenome, idade) {
 return {
  nome: nome,
  sobrenome: sobrenome,
  idade: idade,
 } 
}

const pessoa2 = criarPessoa ('Flávia', 'Faria', 55)
const pessoa3 = criarPessoa ('Yuri', 'Faria', 30)
const pessoa4 = criarPessoa ('Maria', 'Célia', 80)

console.log(pessoa4)

