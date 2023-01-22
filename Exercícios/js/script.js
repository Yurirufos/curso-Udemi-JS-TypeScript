function meuEscopo() {
  const form = document.querySelector(".form")
  const res = document.querySelector(".res")

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const nome = document.querySelector(".nome")
    const sobrenome = document.querySelector(".sobrenome")
    const peso = document.querySelector(".peso")
    const altura = document.querySelector(".altura")

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    })

    console.log(pessoas)

    res.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`
  }
  form.addEventListener("submit", recebeEventoForm)
}
meuEscopo()
